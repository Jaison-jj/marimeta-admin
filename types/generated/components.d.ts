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

export interface ComponentTimer extends Struct.ComponentSchema {
  collectionName: 'components_component_timers';
  info: {
    displayName: 'countDown';
    description: '';
  };
  attributes: {
    titleMessage: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    session: Schema.Attribute.Component<'component.session-and-date', true>;
    countDownDate: Schema.Attribute.DateTime & Schema.Attribute.Required;
    duration: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentSessionAndDate extends Struct.ComponentSchema {
  collectionName: 'components_component_session_and_dates';
  info: {
    displayName: 'sessionAndDate';
    description: '';
  };
  attributes: {
    type: Schema.Attribute.String & Schema.Attribute.Required;
    date: Schema.Attribute.Date & Schema.Attribute.Required;
  };
}

export interface ComponentParentCard extends Struct.ComponentSchema {
  collectionName: 'components_component_parent_cards';
  info: {
    displayName: 'parentCard';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface ComponentCard extends Struct.ComponentSchema {
  collectionName: 'components_component_cards';
  info: {
    displayName: 'card';
    icon: 'apps';
  };
  attributes: {
    image: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    button: Schema.Attribute.String;
  };
}

export interface ComponentAboutMarimetaCampers extends Struct.ComponentSchema {
  collectionName: 'components_component_about_marimeta_campers';
  info: {
    displayName: 'aboutMarimetaCampers';
  };
  attributes: {
    image: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    button: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.title-and-description-card': ComponentTitleAndDescriptionCard;
      'component.timer': ComponentTimer;
      'component.session-and-date': ComponentSessionAndDate;
      'component.parent-card': ComponentParentCard;
      'component.hero': ComponentHero;
      'component.ct-abutton': ComponentCtAbutton;
      'component.card': ComponentCard;
      'component.about-marimeta-campers': ComponentAboutMarimetaCampers;
    }
  }
}
