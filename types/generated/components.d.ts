import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalFooterLinkColumn extends Struct.ComponentSchema {
  collectionName: 'components_global_footer_link_columns';
  info: {
    displayName: 'Footer Link Column';
    icon: 'layout';
  };
  attributes: {
    links: Schema.Attribute.Component<'global.nav-link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalFooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_global_footer_social_links';
  info: {
    displayName: 'Footer Social Links';
    icon: 'link';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
    youtube: Schema.Attribute.String;
  };
}

export interface GlobalNavGroup extends Struct.ComponentSchema {
  collectionName: 'components_global_nav_groups';
  info: {
    displayName: 'Nav Group';
    icon: 'layer';
  };
  attributes: {
    children: Schema.Attribute.Component<'global.nav-link', true>;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalNavLink extends Struct.ComponentSchema {
  collectionName: 'components_global_nav_links';
  info: {
    displayName: 'Nav Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsAboutHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_heroes';
  info: {
    description: '';
    displayName: 'About Hero';
    icon: 'layout';
  };
  attributes: {
    badge: Schema.Attribute.String;
    cta_href: Schema.Attribute.String;
    cta_label: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_accordion_items';
  info: {
    displayName: 'Accordion Item';
    icon: 'list';
  };
  attributes: {
    content: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBrandFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_brand_feature_items';
  info: {
    description: 'A single feature/product section on the Brands page';
    displayName: 'Brand Feature Item';
    icon: 'grid';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    badge: Schema.Attribute.String;
    buttonHref: Schema.Attribute.String;
    buttonLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBrandFlagship extends Struct.ComponentSchema {
  collectionName: 'components_sections_brand_flagships';
  info: {
    description: 'Flagship brand showcase section (FarmProductionSection)';
    displayName: 'Brand Flagship';
    icon: 'star';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    badgeLogo: Schema.Attribute.Media<'images'>;
    buttonHref: Schema.Attribute.String;
    buttonLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBrandHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_brand_heroes';
  info: {
    description: 'Hero section for the Brands page';
    displayName: 'Brand Hero';
    icon: 'layout';
  };
  attributes: {
    breadcrumb: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCareersApply extends Struct.ComponentSchema {
  collectionName: 'components_sections_careers_applies';
  info: {
    description: 'Apply Now form section on the Careers page';
    displayName: 'Careers Apply Section';
    icon: 'cursor';
  };
  attributes: {
    badge: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCareersHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_careers_heroes';
  info: {
    description: 'Hero section for the Careers page';
    displayName: 'Careers Hero';
    icon: 'layout';
  };
  attributes: {
    breadcrumb: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCareersHowWeWork extends Struct.ComponentSchema {
  collectionName: 'components_sections_careers_how_we_works';
  info: {
    description: 'How We Work Together section \u2014 badge, title, and mixed card/image values';
    displayName: 'Careers How We Work';
    icon: 'grid';
  };
  attributes: {
    badge: Schema.Attribute.String;
    title: Schema.Attribute.String;
    values: Schema.Attribute.Component<
      'sections.careers-how-we-work-value',
      true
    >;
  };
}

export interface SectionsCareersHowWeWorkValue extends Struct.ComponentSchema {
  collectionName: 'components_sections_careers_how_we_work_values';
  info: {
    description: 'A single value item \u2014 either a text card or an image';
    displayName: 'Careers How We Work Value';
    icon: 'layout';
  };
  attributes: {
    badge: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['card', 'image']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'card'>;
  };
}

export interface SectionsContactHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_heroes';
  info: {
    displayName: 'Contact Hero';
    icon: 'phone';
  };
  attributes: {
    badge: Schema.Attribute.String;
    bgImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_infos';
  info: {
    displayName: 'Contact Info';
    icon: 'information';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    phone: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactMap extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_maps';
  info: {
    displayName: 'Contact Map';
    icon: 'pinMap';
  };
  attributes: {
    googleMapsUrl: Schema.Attribute.String;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    displayName: 'CTA';
    icon: 'megaphone';
  };
  attributes: {
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_sections';
  info: {
    displayName: 'CTA Section';
    icon: 'megaphone';
  };
  attributes: {
    badge: Schema.Attribute.String;
    cta_href: Schema.Attribute.String;
    cta_label: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaqWrapper extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_wrappers';
  info: {
    displayName: 'FAQ Wrapper';
    icon: 'question';
  };
  attributes: {
    badge: Schema.Attribute.String;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFarmEnvironment extends Struct.ComponentSchema {
  collectionName: 'components_sections_farm_environments';
  info: {
    description: 'The Controlled Environment section on the Farms page';
    displayName: 'Farm Environment';
    icon: 'leaf';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.JSON;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFarmHeroBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_farm_hero_blocks';
  info: {
    description: 'Text content for the Farm page hero section';
    displayName: 'Farm Hero Block';
    icon: 'layout';
  };
  attributes: {
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    row1Images: Schema.Attribute.Media<'images', true>;
    row2Images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFarmProductionBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_farm_production_blocks';
  info: {
    description: 'A FarmProductionSection block with badge, title, description and gallery images';
    displayName: 'Farm Production Block';
    icon: 'star';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    badge: Schema.Attribute.String;
    buttonHref: Schema.Attribute.String;
    buttonLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFarmStrength extends Struct.ComponentSchema {
  collectionName: 'components_sections_farm_strengths';
  info: {
    description: 'The Beef Production strength section on the Farms page';
    displayName: 'Farm Strength';
    icon: 'bold';
  };
  attributes: {
    bodyText: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    stampLabel: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFarmWrapper extends Struct.ComponentSchema {
  collectionName: 'components_sections_farm_wrappers';
  info: {
    displayName: 'Farm Wrapper';
    icon: 'home';
  };
  attributes: {
    ctaButtonHref: Schema.Attribute.String;
    ctaButtonLabel: Schema.Attribute.String;
    ctaText: Schema.Attribute.Text;
    hideCtaCard: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hideKnowMore: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isFarmsPage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    knowMoreHref: Schema.Attribute.String;
    knowMoreLabel: Schema.Attribute.String;
    main_image: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionsFeaturedProductsWrapper
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_featured_products_wrappers';
  info: {
    displayName: 'Featured Products Wrapper';
    icon: 'shoppingCart';
  };
  attributes: {
    badge: Schema.Attribute.String;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    badge: Schema.Attribute.String;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    headingBold: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'videos'>;
  };
}

export interface SectionsHistoryItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_history_items';
  info: {
    displayName: 'History Item';
    icon: 'calendar';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface SectionsHistorySection extends Struct.ComponentSchema {
  collectionName: 'components_sections_history_sections';
  info: {
    displayName: 'History Section';
    icon: 'clock';
  };
  attributes: {
    badge: Schema.Attribute.String;
    items: Schema.Attribute.Component<'sections.history-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsIngredientsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_ingredients_sections';
  info: {
    displayName: 'Ingredients Section';
    icon: 'list';
  };
  attributes: {
    items: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLegalSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_legal_sections';
  info: {
    displayName: 'Legal Section';
    icon: 'file';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsMediaWrapper extends Struct.ComponentSchema {
  collectionName: 'components_sections_media_wrappers';
  info: {
    displayName: 'Media Wrapper';
    icon: 'television';
  };
  attributes: {
    badge: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMethodStep extends Struct.ComponentSchema {
  collectionName: 'components_sections_method_steps';
  info: {
    displayName: 'Method Step';
    icon: 'orderedList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    step: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMissionVision extends Struct.ComponentSchema {
  collectionName: 'components_sections_mission_visions';
  info: {
    displayName: 'Mission Vision';
    icon: 'eye';
  };
  attributes: {
    mission_image_1: Schema.Attribute.Media<'images'>;
    mission_image_2: Schema.Attribute.Media<'images'>;
    mission_text: Schema.Attribute.Text;
    mission_title: Schema.Attribute.String;
    vision_text: Schema.Attribute.Text;
    vision_title: Schema.Attribute.String;
  };
}

export interface SectionsOverview extends Struct.ComponentSchema {
  collectionName: 'components_sections_overviews';
  info: {
    displayName: 'Overview';
    icon: 'apps';
  };
  attributes: {
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    subDescription: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPackagingSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_packaging_sections';
  info: {
    description: 'Packaging section with badge, title, description and image';
    displayName: 'Packaging Section';
    icon: 'cube';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPartnersWrapper extends Struct.ComponentSchema {
  collectionName: 'components_sections_partners_wrappers';
  info: {
    displayName: 'Partners Wrapper';
    icon: 'handshake';
  };
  attributes: {
    badge: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProcessHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_process_heroes';
  info: {
    description: 'Hero section for the Process page';
    displayName: 'Process Hero';
    icon: 'layout';
  };
  attributes: {
    badge: Schema.Attribute.String;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProcessSpotlight extends Struct.ComponentSchema {
  collectionName: 'components_sections_process_spotlights';
  info: {
    description: 'Process spotlight section with badge, title, description, bullet points, CTA and video/image';
    displayName: 'Process Spotlight';
    icon: 'star';
  };
  attributes: {
    badge: Schema.Attribute.String;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    points: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProcessWrapper extends Struct.ComponentSchema {
  collectionName: 'components_sections_process_wrappers';
  info: {
    displayName: 'Process Wrapper';
    icon: 'sync';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProcessingSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_processing_sections';
  info: {
    description: 'Controlled Freezing / Processing section with badge, title, description, bullet points, two gallery images and a stamp label';
    displayName: 'Processing Section';
    icon: 'filter';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    imageLeft: Schema.Attribute.Media<'images'>;
    imageRight: Schema.Attribute.Media<'images'>;
    points: Schema.Attribute.JSON;
    stampLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsQualityCommitment extends Struct.ComponentSchema {
  collectionName: 'components_sections_quality_commitments';
  info: {
    description: 'Quality commitment section with badge, title, description, bullet points and background image';
    displayName: 'Quality Commitment';
    icon: 'check';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    points: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface SectionsRecipesWrapper extends Struct.ComponentSchema {
  collectionName: 'components_sections_recipes_wrappers';
  info: {
    displayName: 'Recipes Wrapper';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_stat_items';
  info: {
    displayName: 'Stat Item';
    icon: 'chart-bar';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SectionsStorySection extends Struct.ComponentSchema {
  collectionName: 'components_sections_story_sections';
  info: {
    displayName: 'Story Section';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    stats: Schema.Attribute.Component<'sections.stat-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTestimonialsWrapper extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials_wrappers';
  info: {
    displayName: 'Testimonials Wrapper';
    icon: 'quote';
  };
  attributes: {
    badge: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsValueItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_value_items';
  info: {
    displayName: 'Value Item';
    icon: 'star';
  };
  attributes: {
    icon: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['card', 'image']>;
  };
}

export interface SectionsValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_values_sections';
  info: {
    displayName: 'Values Section';
    icon: 'heart';
  };
  attributes: {
    badge: Schema.Attribute.String;
    title: Schema.Attribute.String;
    values: Schema.Attribute.Component<'sections.value-item', true>;
  };
}

export interface SharedContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_blocks';
  info: {
    displayName: 'Content Block';
    icon: 'align-left';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.footer-link-column': GlobalFooterLinkColumn;
      'global.footer-social-links': GlobalFooterSocialLinks;
      'global.nav-group': GlobalNavGroup;
      'global.nav-link': GlobalNavLink;
      'sections.about-hero': SectionsAboutHero;
      'sections.accordion-item': SectionsAccordionItem;
      'sections.brand-feature-item': SectionsBrandFeatureItem;
      'sections.brand-flagship': SectionsBrandFlagship;
      'sections.brand-hero': SectionsBrandHero;
      'sections.careers-apply': SectionsCareersApply;
      'sections.careers-hero': SectionsCareersHero;
      'sections.careers-how-we-work': SectionsCareersHowWeWork;
      'sections.careers-how-we-work-value': SectionsCareersHowWeWorkValue;
      'sections.contact-hero': SectionsContactHero;
      'sections.contact-info': SectionsContactInfo;
      'sections.contact-map': SectionsContactMap;
      'sections.cta': SectionsCta;
      'sections.cta-section': SectionsCtaSection;
      'sections.faq-wrapper': SectionsFaqWrapper;
      'sections.farm-environment': SectionsFarmEnvironment;
      'sections.farm-hero-block': SectionsFarmHeroBlock;
      'sections.farm-production-block': SectionsFarmProductionBlock;
      'sections.farm-strength': SectionsFarmStrength;
      'sections.farm-wrapper': SectionsFarmWrapper;
      'sections.featured-products-wrapper': SectionsFeaturedProductsWrapper;
      'sections.hero': SectionsHero;
      'sections.history-item': SectionsHistoryItem;
      'sections.history-section': SectionsHistorySection;
      'sections.ingredients-section': SectionsIngredientsSection;
      'sections.legal-section': SectionsLegalSection;
      'sections.media-wrapper': SectionsMediaWrapper;
      'sections.method-step': SectionsMethodStep;
      'sections.mission-vision': SectionsMissionVision;
      'sections.overview': SectionsOverview;
      'sections.packaging-section': SectionsPackagingSection;
      'sections.partners-wrapper': SectionsPartnersWrapper;
      'sections.process-hero': SectionsProcessHero;
      'sections.process-spotlight': SectionsProcessSpotlight;
      'sections.process-wrapper': SectionsProcessWrapper;
      'sections.processing-section': SectionsProcessingSection;
      'sections.quality-commitment': SectionsQualityCommitment;
      'sections.recipes-wrapper': SectionsRecipesWrapper;
      'sections.stat-item': SectionsStatItem;
      'sections.story-section': SectionsStorySection;
      'sections.testimonials-wrapper': SectionsTestimonialsWrapper;
      'sections.value-item': SectionsValueItem;
      'sections.values-section': SectionsValuesSection;
      'shared.content-block': SharedContentBlock;
      'shared.seo': SharedSeo;
    }
  }
}
