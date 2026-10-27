#!/usr/bin/env bash
# Nightly backup: exports Strapi content (DB rows, not R2-hosted media) and
# uploads it to Dropbox via rclone, then prunes old copies from Dropbox.
#
# Run via cron on the production server. See BACKUPS.md for one-time setup
# (rclone install + Dropbox remote + crontab entry).
#
# Required on PATH: node/npx (same version used to run Strapi) and rclone.
# Cron runs with a minimal PATH, so set it explicitly below if needed.

set -euo pipefail

# export PATH="/usr/local/bin:/usr/bin:/bin:$PATH"

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BACKUP_DIR="$APP_DIR/.backups"
DROPBOX_REMOTE="dropbox:fam-beef-backups"
RETENTION_DAYS="${BACKUP_RETENTION_DAYS:-30}"
RCLONE_CONFIG_PATH="${RCLONE_CONFIG:-$HOME/.config/rclone/rclone.conf}"
TIMESTAMP="$(date -u +%Y%m%dT%H%M%SZ)"
EXPORT_NAME="fam-beef-backup-$TIMESTAMP"

mkdir -p "$BACKUP_DIR"
cd "$APP_DIR"

echo "[backup] exporting Strapi content..."
npx strapi export --no-encrypt -f "$BACKUP_DIR/$EXPORT_NAME"

ARCHIVE="$BACKUP_DIR/$EXPORT_NAME.tar.gz"
if [ ! -f "$ARCHIVE" ]; then
  echo "[backup] export failed: $ARCHIVE not found" >&2
  exit 1
fi

echo "[backup] uploading $(basename "$ARCHIVE") to $DROPBOX_REMOTE..."
rclone copy "$ARCHIVE" "$DROPBOX_REMOTE/" --config "$RCLONE_CONFIG_PATH"

echo "[backup] pruning backups older than ${RETENTION_DAYS}d from Dropbox..."
rclone delete "$DROPBOX_REMOTE" --min-age "${RETENTION_DAYS}d" --config "$RCLONE_CONFIG_PATH"

rm -f "$ARCHIVE"
echo "[backup] done: $EXPORT_NAME.tar.gz"
