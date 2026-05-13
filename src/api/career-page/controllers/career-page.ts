import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::career-page.career-page', () => ({
  async find(ctx) {
    ctx.query = {
      populate: {
        hero: { populate: { image: true } },
        feature: { populate: { image: true } },
        howWeWork: { populate: { images: true } },
        apply: { populate: { image: true } },
        seo: { populate: '*' },
      },
      ...ctx.query,
    };
    return super.find(ctx);
  },
}));
