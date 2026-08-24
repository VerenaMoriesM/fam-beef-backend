'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/export',
      handler: 'export.contactInquiries',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
  ],
  controllers: {
    export: require('./controllers/export'),
  },
};
