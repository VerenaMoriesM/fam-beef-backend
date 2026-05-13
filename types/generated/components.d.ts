import type { Schema, Struct } from '@strapi/strapi';

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

export interface SectionsFarmWrapper extends Struct.ComponentSchema {
  collectionName: 'components_sections_farm_wrappers';
  info: {
    displayName: 'Farm Wrapper';
    icon: 'home';
  };
  attributes: {
    hideCtaCard: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hideKnowMore: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isFarmsPage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    main_image: Schema.Attribute.Media<'images'>;
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
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.about-hero': SectionsAboutHero;
      'sections.accordion-item': SectionsAccordionItem;
      'sections.brand-feature-item': SectionsBrandFeatureItem;
      'sections.brand-flagship': SectionsBrandFlagship;
      'sections.brand-hero': SectionsBrandHero;
      'sections.cta': SectionsCta;
      'sections.cta-section': SectionsCtaSection;
      'sections.farm-wrapper': SectionsFarmWrapper;
      'sections.hero': SectionsHero;
      'sections.history-item': SectionsHistoryItem;
      'sections.history-section': SectionsHistorySection;
      'sections.ingredients-section': SectionsIngredientsSection;
      'sections.method-step': SectionsMethodStep;
      'sections.mission-vision': SectionsMissionVision;
      'sections.overview': SectionsOverview;
      'sections.partners-wrapper': SectionsPartnersWrapper;
      'sections.process-wrapper': SectionsProcessWrapper;
      'sections.stat-item': SectionsStatItem;
      'sections.story-section': SectionsStorySection;
      'sections.value-item': SectionsValueItem;
      'sections.values-section': SectionsValuesSection;
      'shared.content-block': SharedContentBlock;
      'shared.seo': SharedSeo;
    }
  }
}
