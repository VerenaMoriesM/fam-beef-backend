import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  cloud: {
    enabled: false,
  },
  'content-type-builder': {
    enabled: true,
  },
});

export default config;
