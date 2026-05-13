import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  cloud: {
    enabled: false,
  },
  'content-type-builder': {
    enabled: true,
  },
  upload: {
    config: {
      provider: '@strapi/provider-upload-aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('R2_ACCESS_KEY_ID'),
          secretAccessKey: env('R2_ACCESS_SECRET'),
        },
        region: 'auto',
        endpoint: `https://${env('CLOUDFLARE_ACCOUNT_ID')}.r2.cloudflarestorage.com`,
        params: {
          Bucket: env('R2_BUCKET'),
        },
        baseUrl: env('R2_PUBLIC_URL'),
      },
    },
  },
});

export default config;
