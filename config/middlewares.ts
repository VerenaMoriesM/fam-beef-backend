import type { Core } from '@strapi/strapi';

const config = ({ env }): Core.Config.Middlewares => [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', '*.r2.cloudflarestorage.com'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:', '*.r2.cloudflarestorage.com', '*.r2.dev'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:', '*.r2.cloudflarestorage.com', '*.r2.dev'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: env('CORS_ORIGINS', '*').split(',').map((o: string) => o.trim()),
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default config;
