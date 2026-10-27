# Backend CI/CD & Dropbox backups — one-time setup

This repo now has two pieces of automation:

1. **`.github/workflows/deploy-backend.yml`** — on every push to `main`, GitHub
   Actions SSHes into the production server, pulls the latest code, rebuilds,
   and restarts the `fam-beef-backend` PM2 process. This replaces the manual
   SSH block that used to live in `fam-beef`'s `push-and-restart.command`.
2. **`scripts/backup-db-to-dropbox.sh`** — meant to run nightly via cron on
   the production server. It runs `strapi export` (a full content snapshot —
   entries, relations, config; not the media files, which already live on
   Cloudflare R2), uploads the archive to a Dropbox folder with `rclone`, and
   deletes anything in that folder older than 30 days.

Both need credentials only you have. Here's what to do once.

## 1. GitHub Actions secrets (for auto-deploy)

Generate a dedicated deploy key rather than reusing your personal one:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/fam_beef_deploy_key -N ""
```

Add the **public** key to the server's authorized_keys for the deploy user:

```bash
ssh-copy-id -i ~/.ssh/fam_beef_deploy_key.pub cloudhosta-fambeef@167.235.61.217
```

In the `fam-beef-backend` GitHub repo → **Settings → Secrets and variables →
Actions**, add:

| Secret | Value |
|---|---|
| `SSH_HOST` | `167.235.61.217` |
| `SSH_USER` | `cloudhosta-fambeef` |
| `SSH_PRIVATE_KEY` | contents of `~/.ssh/fam_beef_deploy_key` (the private key, not `.pub`) |
| `SSH_PORT` | only if not 22 |

After that, merging to `main` deploys automatically. You can still trigger it
manually from the Actions tab (`workflow_dispatch`).

## 2. Dropbox app + token (for backups)

1. Go to <https://www.dropbox.com/developers/apps> → **Create app**.
   - Choose **Scoped access** → **App folder** (so it can only see its own
     folder, not your whole Dropbox).
   - Name it something like `fam-beef-backups`.
2. On the **Permissions** tab, enable `files.content.write` and
   `files.content.read`, then click **Submit**.
3. On the **Settings** tab, note the **App key** and **App secret**.
4. On your own laptop (needs a browser), install rclone and authorize:

   ```bash
   brew install rclone   # or see https://rclone.org/install/
   rclone authorize "dropbox" <APP_KEY> <APP_SECRET>
   ```

   This opens a browser to approve access, then prints a JSON token blob to
   the terminal — copy it.

5. SSH into the production server and create the rclone remote there:

   ```bash
   ssh cloudhosta-fambeef@167.235.61.217
   rclone config create dropbox dropbox client_id <APP_KEY> client_secret <APP_SECRET> token '<paste the JSON from step 4>'
   ```

   (If `rclone` isn't installed on the server yet: `curl https://rclone.org/install.sh | sudo bash`.)

6. Verify it works:

   ```bash
   rclone mkdir dropbox:fam-beef-backups
   rclone lsd dropbox:
   ```

## 3. Cron job on the server

Once the code in this branch is merged/deployed (so `scripts/backup-db-to-dropbox.sh`
exists at `~/htdocs/fambeef.cloudhosta.com/scripts/`), add a nightly cron entry:

```bash
ssh cloudhosta-fambeef@167.235.61.217
mkdir -p ~/logs
crontab -e
```

Add this line (3am server time):

```
0 3 * * * /home/cloudhosta-fambeef/htdocs/fambeef.cloudhosta.com/scripts/backup-db-to-dropbox.sh >> /home/cloudhosta-fambeef/logs/backup.log 2>&1
```

Test it manually first so you can see errors immediately instead of waiting
for 3am:

```bash
cd ~/htdocs/fambeef.cloudhosta.com
./scripts/backup-db-to-dropbox.sh
```

If `node`/`npx` or `rclone` aren't found under cron's minimal `PATH`, uncomment
and fix the `export PATH=...` line at the top of the script (check `which node`
and `which rclone` on the server to get the right paths).

Backups land in the Dropbox app folder as `fam-beef-backup-<UTC timestamp>.tar.gz`,
and anything older than 30 days is deleted automatically on each run. To
restore, download the archive and run `strapi import -f <file>.tar.gz` against
a Strapi instance (see [Strapi's data transfer docs](https://docs.strapi.io/dev-docs/data-management/import-export)).
