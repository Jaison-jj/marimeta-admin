import type { Struct, Schema } from '@strapi/strapi';

export interface ComponentTitleAndDescriptionCard
  extends Struct.ComponentSchema {
  collectionName: 'components_component_title_and_description_cards';
  info: {
    displayName: 'titleAndDescriptionCard';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ComponentHero extends Struct.ComponentSchema {
  collectionName: 'components_component_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    heading1: Schema.Attribute.String & Schema.Attribute.Required;
    heading2: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    videoUrl: Schema.Attribute.String & Schema.Attribute.Required;
    button1: Schema.Attribute.Component<'component.ct-abutton', false>;
    button2: Schema.Attribute.Component<'component.ct-abutton', false>;
  };
}

export interface ComponentCtAbutton extends Struct.ComponentSchema {
  collectionName: 'components_component_ct_abuttons';
  info: {
    displayName: 'CTAbutton';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.title-and-description-card': ComponentTitleAndDescriptionCard;
      'component.hero': ComponentHero;
      'component.ct-abutton': ComponentCtAbutton;
    }
  }
}
