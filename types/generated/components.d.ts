import type { Struct, Schema } from '@strapi/strapi';

export interface FaqFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_items';
  info: {
    displayName: 'faqItem';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    isList: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface CardTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_card_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    image: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface CardImageTitleDescLinkButton extends Struct.ComponentSchema {
  collectionName: 'components_card_image_title_desc_link_buttons';
  info: {
    displayName: 'ImageTitleDescLinkButton';
  };
  attributes: {
    image: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    link: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
  };
}

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

export interface ComponentVideoCard extends Struct.ComponentSchema {
  collectionName: 'components_component_video_cards';
  info: {
    displayName: 'videoCard';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    videourl: Schema.Attribute.String & Schema.Attribute.Required;
    subDescriptions: Schema.Attribute.Component<'component.description', true>;
    link: Schema.Attribute.String;
  };
}

export interface ComponentTitlesAndDescriptions extends Struct.ComponentSchema {
  collectionName: 'components_component_titles_and_descriptions';
  info: {
    displayName: 'titlesAndDescriptions';
  };
  attributes: {
    titles: Schema.Attribute.Component<'component.description', true>;
    descriptions: Schema.Attribute.Component<'component.description', true>;
  };
}

export interface ComponentTitleDescriptionsImages
  extends Struct.ComponentSchema {
  collectionName: 'components_component_title_descriptions_images';
  info: {
    displayName: 'titleDescriptionsImages';
  };
  attributes: {
    title: Schema.Attribute.String;
    descriptions: Schema.Attribute.Component<'component.description', true>;
    images: Schema.Attribute.Component<'component.description', true>;
  };
}

export interface ComponentTitleDescriptionType extends Struct.ComponentSchema {
  collectionName: 'components_component_title_description_types';
  info: {
    displayName: 'titleDescriptionType';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    isParentFaq: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface ComponentTitleAndDescription extends Struct.ComponentSchema {
  collectionName: 'components_component_title_and_descriptions';
  info: {
    displayName: 'titleAndDescriptions';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    descriptions: Schema.Attribute.Component<'component.description', true>;
  };
}

export interface ComponentTitleAndDescriptionCard
  extends Struct.ComponentSchema {
  collectionName: 'components_component_title_and_description_cards';
  info: {
    displayName: 'titleAndDescriptionCard';
    description: '';
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

export interface ComponentSubBanner extends Struct.ComponentSchema {
  collectionName: 'components_component_sub_banners';
  info: {
    displayName: 'subBanner';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    button: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    dates: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface ComponentPriceCard extends Struct.ComponentSchema {
  collectionName: 'components_component_price_cards';
  info: {
    displayName: 'priceCard';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    price: Schema.Attribute.BigInteger;
    image: Schema.Attribute.String;
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

export interface ComponentPageBanner extends Struct.ComponentSchema {
  collectionName: 'components_component_page_banners';
  info: {
    displayName: 'pageBanner';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    subHeading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentNavWithOptions extends Struct.ComponentSchema {
  collectionName: 'components_component_nav_with_options';
  info: {
    displayName: 'navWithOptions';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    options: Schema.Attribute.Component<'component.nav-item', true>;
  };
}

export interface ComponentNavLink extends Struct.ComponentSchema {
  collectionName: 'components_component_nav_links';
  info: {
    displayName: 'navLink';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentNavItem extends Struct.ComponentSchema {
  collectionName: 'components_component_nav_items';
  info: {
    displayName: 'navItem';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    href: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentImageTitleDescriptions
  extends Struct.ComponentSchema {
  collectionName: 'components_component_image_title_descriptions';
  info: {
    displayName: 'imageTitleDescriptions';
  };
  attributes: {
    image: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    paras: Schema.Attribute.Component<'component.description', true>;
  };
}

export interface ComponentImageTitleDescriptionButton
  extends Struct.ComponentSchema {
  collectionName: 'components_component_image_title_description_buttons';
  info: {
    displayName: 'imageTitleDescriptionButton';
  };
  attributes: {
    image: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    button: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentImageTitleDesc extends Struct.ComponentSchema {
  collectionName: 'components_component_image_title_descs';
  info: {
    displayName: 'imageTitleDesc';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    subDescription: Schema.Attribute.Text;
    filterType: Schema.Attribute.String;
  };
}

export interface ComponentImageDescriptions extends Struct.ComponentSchema {
  collectionName: 'components_component_image_descriptions';
  info: {
    displayName: 'ImageDescriptions';
  };
  attributes: {
    image: Schema.Attribute.String;
    descriptions: Schema.Attribute.Component<'component.description', true>;
  };
}

export interface ComponentImageAndDescription extends Struct.ComponentSchema {
  collectionName: 'components_component_image_and_descriptions';
  info: {
    displayName: 'imageAndDescription';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.String;
    description: Schema.Attribute.Text;
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

export interface ComponentDog extends Struct.ComponentSchema {
  collectionName: 'components_component_dogs';
  info: {
    displayName: 'dog';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentDirector extends Struct.ComponentSchema {
  collectionName: 'components_component_directors';
  info: {
    displayName: 'director';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.String & Schema.Attribute.Required;
    footer: Schema.Attribute.Text;
    email1: Schema.Attribute.Email & Schema.Attribute.Required;
    email2: Schema.Attribute.Email;
    descriptions: Schema.Attribute.Component<'component.description', true>;
  };
}

export interface ComponentDescription extends Struct.ComponentSchema {
  collectionName: 'components_component_descriptions';
  info: {
    displayName: 'description';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
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

export interface ComponentButton extends Struct.ComponentSchema {
  collectionName: 'components_component_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.String;
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
      'faq.faq-item': FaqFaqItem;
      'card.testimonial': CardTestimonial;
      'card.image-title-desc-link-button': CardImageTitleDescLinkButton;
      'component.video-or-image': ComponentVideoOrImage;
      'component.video-card': ComponentVideoCard;
      'component.titles-and-descriptions': ComponentTitlesAndDescriptions;
      'component.title-descriptions-images': ComponentTitleDescriptionsImages;
      'component.title-description-type': ComponentTitleDescriptionType;
      'component.title-and-description': ComponentTitleAndDescription;
      'component.title-and-description-card': ComponentTitleAndDescriptionCard;
      'component.timer': ComponentTimer;
      'component.sub-banner': ComponentSubBanner;
      'component.sources': ComponentSources;
      'component.socials': ComponentSocials;
      'component.social-redirect': ComponentSocialRedirect;
      'component.session-and-date': ComponentSessionAndDate;
      'component.price-card': ComponentPriceCard;
      'component.parent-card': ComponentParentCard;
      'component.page-banner': ComponentPageBanner;
      'component.nav-with-options': ComponentNavWithOptions;
      'component.nav-link': ComponentNavLink;
      'component.nav-item': ComponentNavItem;
      'component.image-title-descriptions': ComponentImageTitleDescriptions;
      'component.image-title-description-button': ComponentImageTitleDescriptionButton;
      'component.image-title-desc': ComponentImageTitleDesc;
      'component.image-descriptions': ComponentImageDescriptions;
      'component.image-and-description': ComponentImageAndDescription;
      'component.hero': ComponentHero;
      'component.get-in-touch': ComponentGetInTouch;
      'component.gallery': ComponentGallery;
      'component.dog': ComponentDog;
      'component.director': ComponentDirector;
      'component.description': ComponentDescription;
      'component.ct-abutton': ComponentCtAbutton;
      'component.contact-us': ComponentContactUs;
      'component.card': ComponentCard;
      'component.button': ComponentButton;
      'component.blog-card': ComponentBlogCard;
      'component.about-marimeta-campers': ComponentAboutMarimetaCampers;
    }
  }
}
