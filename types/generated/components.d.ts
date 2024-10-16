import type { Struct, Schema } from '@strapi/strapi';

export interface ComponentVideoOrImage extends Struct.ComponentSchema {
  collectionName: 'components_component_video_or_images';
  info: {
    displayName: 'videoOrImage';
    description: '';
  };
  attributes: {
    videoUrl: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://ik.imagekit.io/cf172nbiz/Website%20B%20Roll%20(1).mp4?updatedAt=1728981193691'>;
    isImage: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    thumpNail: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://ik.imagekit.io/cf172nbiz/heroVideoPreviewImage.png?updatedAt=1728984462129'>;
  };
}

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

export interface ComponentSources extends Struct.ComponentSchema {
  collectionName: 'components_component_sources';
  info: {
    displayName: 'sources';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ComponentSocials extends Struct.ComponentSchema {
  collectionName: 'components_component_socials';
  info: {
    displayName: 'socials';
  };
  attributes: {
    socialItem: Schema.Attribute.Component<'component.social-redirect', true>;
    socialsTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentSocialRedirect extends Struct.ComponentSchema {
  collectionName: 'components_component_social_redirects';
  info: {
    displayName: 'socialRedirect';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface ComponentGetInTouch extends Struct.ComponentSchema {
  collectionName: 'components_component_get_in_touches';
  info: {
    displayName: 'getInTouch';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    address1Title: Schema.Attribute.String;
    address1: Schema.Attribute.Text & Schema.Attribute.Required;
    address2Title: Schema.Attribute.String & Schema.Attribute.Required;
    address2: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ComponentGallery extends Struct.ComponentSchema {
  collectionName: 'components_component_galleries';
  info: {
    displayName: 'gallery';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
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

export interface ComponentContactUs extends Struct.ComponentSchema {
  collectionName: 'components_component_contactuses';
  info: {
    displayName: 'contactUs';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    subDescription: Schema.Attribute.Text;
    phone: Schema.Attribute.BigInteger;
    email: Schema.Attribute.Email;
    image: Schema.Attribute.String;
    countactUsSources: Schema.Attribute.Component<'component.sources', true>;
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

export interface ComponentBlogCard extends Struct.ComponentSchema {
  collectionName: 'components_component_blog_cards';
  info: {
    displayName: 'blogCard';
  };
  attributes: {
    title: Schema.Attribute.String;
    date: Schema.Attribute.Date;
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
      'component.video-or-image': ComponentVideoOrImage;
      'component.title-and-description-card': ComponentTitleAndDescriptionCard;
      'component.timer': ComponentTimer;
      'component.sources': ComponentSources;
      'component.socials': ComponentSocials;
      'component.social-redirect': ComponentSocialRedirect;
      'component.session-and-date': ComponentSessionAndDate;
      'component.parent-card': ComponentParentCard;
      'component.hero': ComponentHero;
      'component.get-in-touch': ComponentGetInTouch;
      'component.gallery': ComponentGallery;
      'component.ct-abutton': ComponentCtAbutton;
      'component.contact-us': ComponentContactUs;
      'component.card': ComponentCard;
      'component.blog-card': ComponentBlogCard;
      'component.about-marimeta-campers': ComponentAboutMarimetaCampers;
    }
  }
}
