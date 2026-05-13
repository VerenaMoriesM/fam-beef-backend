import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::brand-page.brand-page', () => ({
  async find(ctx) {
    ctx.query = {
      populate: {
        hero: { populate: '*' },
        flagship: { populate: { badgeLogo: true, images: true } },
        features: { populate: { image: true } },
        cta: { populate: '*' },
        seo: { populate: '*' },
      },
      ...ctx.query,
    };
    return super.find(ctx);
  },
}));
