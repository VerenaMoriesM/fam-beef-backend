import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::recipe-page.recipe-page', () => ({
  async find(ctx) {
    ctx.query = { populate: '*', ...ctx.query };
    return super.find(ctx);
  },
  async findOne(ctx) {
    ctx.query = { populate: '*', ...ctx.query };
    return super.findOne(ctx);
  },
}));
