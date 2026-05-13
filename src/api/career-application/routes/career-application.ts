export default {
  routes: [
    {
      method: 'POST',
      path: '/career-applications',
      handler: 'career-application.create',
      config: {
        auth: false, // Allow unauthenticated submissions from the Next.js API route
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/career-applications',
      handler: 'career-application.find',
      config: {
        // Requires auth — admin only
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/career-applications/:id',
      handler: 'career-application.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/career-applications/:id',
      handler: 'career-application.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/career-applications/:id',
      handler: 'career-application.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
