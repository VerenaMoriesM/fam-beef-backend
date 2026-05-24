import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::process-page.process-page', () => ({
  async find(ctx) {
    ctx.query = {
      populate: {
        hero: true,
        qualityCommitment: { populate: { image: true } },
        spotlight: { populate: { image: true } },
        processing: { populate: { imageLeft: true, imageRight: true } },
        packaging: { populate: { image: true } },
        cta: { populate: { image: true } },
        seo: { populate: { shareImage: true } },
      },
      ...ctx.query,
    };
    return super.find(ctx);
  },
}));
