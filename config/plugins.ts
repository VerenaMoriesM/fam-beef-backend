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
      provider: 'strapi-provider-upload-cloudflare-r2',
      providerOptions: {
        accessKeyId: env('R2_ACCESS_KEY_ID'),
        secretAccessKey: env('R2_ACCESS_SECRET'),
        accountId: env('CLOUDFLARE_ACCOUNT_ID'),
        bucket: env('R2_BUCKET'),
        publicDomain: env('R2_PUBLIC_URL'),
      },
    },
  },
});

export default config;
