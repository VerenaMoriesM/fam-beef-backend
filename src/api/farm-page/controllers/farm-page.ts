import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::farm-page.farm-page', () => ({
  async find(ctx) {
    ctx.query = {
      populate: {
        hero: true,
        calf: { populate: { images: true } },
        environment: { populate: { image: true } },
        strength: { populate: { image: true } },
        livestock: { populate: { images: true } },
        cta: { populate: '*' },
        seo: { populate: '*' },
      },
      ...ctx.query,
    };
    return super.find(ctx);
  },
}));
