import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  cloud: {
    enabled: false,
  },
  'content-type-builder': {
    enabled: true,
  },
  i18n: {
    enabled: true,
    config: {
      defaultLocale: 'en',
      locales: ['en', 'ar'],
    },
  },
  'populate-deep': {
    enabled: true,
    config: {
      defaultDepth: 5,
    },
  },
  upload: {
    config: {
      provider: '@strapi/provider-upload-aws-s3',
      providerOptions: {
        baseUrl: env('R2_PUBLIC_URL'),
        s3Options: {
          credentials: {
            accessKeyId: env('R2_ACCESS_KEY_ID'),
            secretAccessKey: env('R2_ACCESS_SECRET'),
          },
          region: 'auto',
          endpoint: `https://${env('CLOUDFLARE_ACCOUNT_ID')}.r2.cloudflarestorage.com`,
          params: {
            Bucket: env('R2_BUCKET'),
          },
        },
      },
    },
  },
});

export default config;
