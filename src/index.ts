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
} from './seed-data';

export default {
  register(/* { strapi } */) {},

  async bootstrap({ strapi }: { strapi: any }) {
    console.log('Seeding database...');

    // Products - Update or Create
    for (const product of SEED_PRODUCTS) {
      const existing = await strapi.documents('api::product.product').findMany({
        filters: { slug: product.slug }
      });

      if (existing.length > 0) {
        // Update existing with new fields
        await strapi.documents('api::product.product').update({
          documentId: existing[0].documentId,
          data: product,
          status: 'published'
        });
      } else {
        // Create new
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
      // Find related product by slug if we want to link it (demo purposes)
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

    // Home Page (Single Type)
    const homePage = await strapi.documents('api::home-page.home-page').findFirst();
    if (homePage) {
        await strapi.documents('api::home-page.home-page').update({
            documentId: homePage.documentId,
            data: SEED_HOME_PAGE,
            status: 'published'
        });
    } else {
      await strapi.documents('api::home-page.home-page').create({
        data: SEED_HOME_PAGE,
        status: 'published'
      });
    }

    // FAQ Page (Single Type)
    const faqPage = await strapi.documents('api::faq-page.faq-page').findFirst();
    if (faqPage) {
      await strapi.documents('api::faq-page.faq-page').update({
        documentId: faqPage.documentId,
        data: SEED_FAQ_PAGE,
        status: 'published'
      });
    } else {
      await strapi.documents('api::faq-page.faq-page').create({
        data: SEED_FAQ_PAGE,
        status: 'published'
      });
    }

    // Recipe Page (Single Type)
    const recipePage = await strapi.documents('api::recipe-page.recipe-page').findFirst();
    if (recipePage) {
      await strapi.documents('api::recipe-page.recipe-page').update({
        documentId: recipePage.documentId,
        data: SEED_RECIPE_PAGE,
        status: 'published'
      });
    } else {
      await strapi.documents('api::recipe-page.recipe-page').create({
        data: SEED_RECIPE_PAGE,
        status: 'published'
      });
    }

    // Product Page (Single Type)
    const productPage = await strapi.documents('api::product-page.product-page').findFirst();
    if (productPage) {
      await strapi.documents('api::product-page.product-page').update({
        documentId: productPage.documentId,
        data: SEED_PRODUCT_PAGE,
        status: 'published'
      });
    } else {
      await strapi.documents('api::product-page.product-page').create({
        data: SEED_PRODUCT_PAGE,
        status: 'published'
      });
    }

    // Media Page (Single Type)
    const mediaPage = await strapi.documents('api::media-page.media-page').findFirst();
    if (mediaPage) {
      await strapi.documents('api::media-page.media-page').update({
        documentId: mediaPage.documentId,
        data: SEED_MEDIA_PAGE,
        status: 'published'
      });
    } else {
      await strapi.documents('api::media-page.media-page').create({
        data: SEED_MEDIA_PAGE,
        status: 'published'
      });
    }

    // About Page (Single Type)
    const aboutPage = await strapi.documents('api::about-page.about-page').findFirst();
    if (aboutPage) {
      await strapi.documents('api::about-page.about-page').update({
        documentId: aboutPage.documentId,
        data: SEED_ABOUT_PAGE,
        status: 'published'
      });
    } else {
      await strapi.documents('api::about-page.about-page').create({
        data: SEED_ABOUT_PAGE,
        status: 'published'
      });
    }

    // Career Page (Single Type)
    const careerPage = await strapi.documents('api::career-page.career-page').findFirst();
    if (careerPage) {
      await strapi.documents('api::career-page.career-page').update({
        documentId: careerPage.documentId,
        data: SEED_CAREER_PAGE,
        status: 'published',
      });
    } else {
      await strapi.documents('api::career-page.career-page').create({
        data: SEED_CAREER_PAGE,
        status: 'published',
      });
    }

    // Farm Page (Single Type)
    const farmPage = await strapi.documents('api::farm-page.farm-page').findFirst();
    if (farmPage) {
      await strapi.documents('api::farm-page.farm-page').update({
        documentId: farmPage.documentId,
        data: SEED_FARM_PAGE,
        status: 'published',
      });
    } else {
      await strapi.documents('api::farm-page.farm-page').create({
        data: SEED_FARM_PAGE,
        status: 'published',
      });
    }

    // Brand Page (Single Type)
    const brandPage = await strapi.documents('api::brand-page.brand-page').findFirst();
    if (brandPage) {
      await strapi.documents('api::brand-page.brand-page').update({
        documentId: brandPage.documentId,
        data: SEED_BRAND_PAGE,
        status: 'published',
      });
    } else {
      await strapi.documents('api::brand-page.brand-page').create({
        data: SEED_BRAND_PAGE,
        status: 'published',
      });
    }

    // Contact Page (Single Type)
    const contactPage = await strapi.documents('api::contact-page.contact-page').findFirst();
    if (contactPage) {
      await strapi.documents('api::contact-page.contact-page').update({
        documentId: contactPage.documentId,
        data: SEED_CONTACT_PAGE,
        status: 'published',
      });
    } else {
      await strapi.documents('api::contact-page.contact-page').create({
        data: SEED_CONTACT_PAGE,
        status: 'published',
      });
    }

    console.log('Database seeded successfully!');
  },
};
