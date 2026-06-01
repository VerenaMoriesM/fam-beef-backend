export default {
  routes: [
    {
      method: 'POST',
      path: '/newsletter-subscribers',
      handler: 'newsletter-subscriber.create',
      config: {
        auth: false, // Public — Next.js API route proxies this with server-side token
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/newsletter-subscribers',
      handler: 'newsletter-subscriber.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/newsletter-subscribers/:id',
      handler: 'newsletter-subscriber.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/newsletter-subscribers/:id',
      handler: 'newsletter-subscriber.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/newsletter-subscribers/:id',
      handler: 'newsletter-subscriber.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
