import {
  SEED_PRODUCTS,
  SEED_BRANDS,
  SEED_PROCESS_STEPS,
  SEED_HOME_PAGE,
  SEED_TESTIMONIALS,
  SEED_FAQS,
  SEED_PARTNERS,
  SEED_RECIPES,
  SEED_MEDIA_POSTS,
  SEED_MEDIA_CATEGORIES,
  SEED_MEDIA_PAGE,
  SEED_FAQ_PAGE,
  SEED_RECIPE_PAGE,
  SEED_PRODUCT_PAGE,
  SEED_ABOUT_PAGE,
  SEED_BRAND_PAGE,
  SEED_FARM_PAGE,
  SEED_CAREER_PAGE,
  SEED_CONTACT_PAGE,
  SEED_NAVBAR_SETTING,
  SEED_FOOTER_SETTING,
  SEED_TERMS_PAGE,
  SEED_PRIVACY_PAGE,
} from './seed-data';

/** Upsert a single-type (finds it then updates, or creates if missing). */
async function upsertSingleType(strapi: any, uid: string, data: object) {
  const existing = await strapi.documents(uid).findFirst();
  if (existing) {
    await strapi.documents(uid).update({ documentId: existing.documentId, data, status: 'published' });
  } else {
    await strapi.documents(uid).create({ data, status: 'published' });
  }
}

export default {
  register(/* { strapi } */) {},

  async bootstrap({ strapi }: { strapi: any }) {

    // ─── SINGLE TYPES — upsert in background so server starts immediately ───────────
    // Do NOT await — bootstrap returns fast, upserts finish in the background.
    // Sequential to avoid concurrent-query warnings from the pg client.
    console.log('Scheduling single-type page upserts in background...');
    (async () => {
      try {
        await upsertSingleType(strapi, 'api::home-page.home-page',           SEED_HOME_PAGE);
        await upsertSingleType(strapi, 'api::faq-page.faq-page',             SEED_FAQ_PAGE);
        await upsertSingleType(strapi, 'api::recipe-page.recipe-page',       SEED_RECIPE_PAGE);
        await upsertSingleType(strapi, 'api::product-page.product-page',     SEED_PRODUCT_PAGE);
        await upsertSingleType(strapi, 'api::media-page.media-page',         SEED_MEDIA_PAGE);
        await upsertSingleType(strapi, 'api::about-page.about-page',         SEED_ABOUT_PAGE);
        await upsertSingleType(strapi, 'api::career-page.career-page',       SEED_CAREER_PAGE);
        await upsertSingleType(strapi, 'api::farm-page.farm-page',           SEED_FARM_PAGE);
        await upsertSingleType(strapi, 'api::brand-page.brand-page',         SEED_BRAND_PAGE);
        await upsertSingleType(strapi, 'api::contact-page.contact-page',     SEED_CONTACT_PAGE);
        await upsertSingleType(strapi, 'api::terms-page.terms-page',         SEED_TERMS_PAGE);
        await upsertSingleType(strapi, 'api::privacy-page.privacy-page',     SEED_PRIVACY_PAGE);
        await upsertSingleType(strapi, 'api::navbar-setting.navbar-setting', SEED_NAVBAR_SETTING);
        await upsertSingleType(strapi, 'api::footer-setting.footer-setting', SEED_FOOTER_SETTING);
        console.log('Single-type pages upserted.');
      } catch (err) {
        console.error('Background upsert error:', err);
      }
    })();

    // ─── COLLECTION TYPES — only seed once (skip if already populated) ───────────────
    const productCount = await strapi.documents('api::product.product').count();
    if (productCount > 0) {
      console.log('Collection types already seeded, skipping collection seeding.');
      return;
    }
    console.log('Seeding collection types...');

    // Products - Update or Create
    for (const product of SEED_PRODUCTS) {
      const existing = await strapi.documents('api::product.product').findMany({
        filters: { slug: product.slug }
      });

      if (existing.length > 0) {
        await strapi.documents('api::product.product').update({
          documentId: existing[0].documentId,
          data: product,
          status: 'published'
        });
      } else {
        await strapi.documents('api::product.product').create({
          data: product,
          status: 'published'
        });
      }
    }

    // Brands
    const brandCount = await strapi.documents('api::brand.brand').count();
    if (brandCount === 0) {
      for (const brand of SEED_BRANDS) {
        await strapi.documents('api::brand.brand').create({ data: brand, status: 'published' });
      }
    }

    // Process Steps
    const stepCount = await strapi.documents('api::process-step.process-step').count();
    if (stepCount === 0) {
      for (const step of SEED_PROCESS_STEPS) {
        await strapi.documents('api::process-step.process-step').create({ data: step, status: 'published' });
      }
    }

    // Testimonials
    const testimonialCount = await strapi.documents('api::testimonial.testimonial').count();
    if (testimonialCount === 0) {
      for (const testimonial of SEED_TESTIMONIALS) {
        await strapi.documents('api::testimonial.testimonial').create({ data: testimonial, status: 'published' });
      }
    }

    // FAQs
    for (const faq of SEED_FAQS) {
      const existing = await strapi.documents('api::faq.faq').findMany({
        filters: { question: faq.question }
      });

      if (existing.length > 0) {
        await strapi.documents('api::faq.faq').update({
          documentId: existing[0].documentId,
          data: faq,
          status: 'published'
        });
      } else {
        await strapi.documents('api::faq.faq').create({
          data: faq,
          status: 'published'
        });
      }
    }

    // Partners
    const partnerCount = await strapi.documents('api::partner.partner').count();
    if (partnerCount === 0) {
      for (const partner of SEED_PARTNERS) {
        await strapi.documents('api::partner.partner').create({ data: partner, status: 'published' });
      }
    }

    // Recipes
    for (const recipe of SEED_RECIPES) {
      let relatedProductId = null;
      if (recipe.slug === "cairo-beef-strips") {
        const p = await strapi.documents('api::product.product').findMany({ filters: { slug: 'frozen-beef-shank' } });
        if (p.length > 0) relatedProductId = p[0].documentId;
      } else if (recipe.slug === "beef-pasta") {
        const p = await strapi.documents('api::product.product').findMany({ filters: { slug: 'minced-meat-lean' } });
        if (p.length > 0) relatedProductId = p[0].documentId;
      }

      const recipeData: any = { ...recipe };
      if (relatedProductId) recipeData.product = relatedProductId;

      const existing = await strapi.documents('api::recipe.recipe').findMany({
        filters: { slug: recipe.slug }
      });

      if (existing.length > 0) {
        await strapi.documents('api::recipe.recipe').update({
          documentId: existing[0].documentId,
          data: recipeData,
          status: 'published'
        });
      } else {
        await strapi.documents('api::recipe.recipe').create({
          data: recipeData,
          status: 'published'
        });
      }
    }

    // Media Categories
    for (const cat of SEED_MEDIA_CATEGORIES) {
      const existing = await strapi.documents('api::media-category.media-category').findMany({
        filters: { name: cat.name }
      });
      if (existing.length === 0) {
        await strapi.documents('api::media-category.media-category').create({ data: cat, status: 'published' });
      }
    }

    // Media Posts
    for (const post of SEED_MEDIA_POSTS) {
      const cats = await strapi.documents('api::media-category.media-category').findMany({
        filters: { name: post.category }
      });

      const postData: any = { ...post };
      if (cats.length > 0) {
        postData.category = cats[0].documentId;
      }

      const existing = await strapi.documents('api::media-post.media-post').findMany({
        filters: { slug: post.slug }
      });

      if (existing.length > 0) {
        await strapi.documents('api::media-post.media-post').update({
          documentId: existing[0].documentId,
          data: postData,
          status: 'published'
        });
      } else {
        await strapi.documents('api::media-post.media-post').create({
          data: postData,
          status: 'published'
        });
      }
    }

    console.log('Database seeded successfully!');
  },
};
