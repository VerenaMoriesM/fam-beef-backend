export default {
  routes: [
    {
      method: 'POST',
      path: '/contact-inquiries',
      handler: 'contact-inquiry.create',
      config: {
        auth: false, // Public — Next.js API route proxies this with server-side token
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/contact-inquiries',
      handler: 'contact-inquiry.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/contact-inquiries/:id',
      handler: 'contact-inquiry.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/contact-inquiries/:id',
      handler: 'contact-inquiry.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/contact-inquiries/:id',
      handler: 'contact-inquiry.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
