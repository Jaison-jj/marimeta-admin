import type { Struct, Schema } from '@strapi/strapi';

export interface WhyMarimetaImgWithHeading extends Struct.ComponentSchema {
  collectionName: 'components_why_marimeta_img_with_headings';
  info: {
    displayName: 'imgWithHeading';
  };
  attributes: {
    heading: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
  };
}

export interface PriceServiceAndPrice extends Struct.ComponentSchema {
  collectionName: 'components_price_service_and_prices';
  info: {
    displayName: 'serviceAndPrice';
  };
  attributes: {
    service: Schema.Attribute.String;
    price: Schema.Attribute.String;
  };
}

export interface PriceCanteenAndLaundry extends Struct.ComponentSchema {
  collectionName: 'components_price_canteen_and_laundries';
  info: {
    displayName: 'canteenAndLaundry';
  };
  attributes: {
    serviceName: Schema.Attribute.String;
    price: Schema.Attribute.Integer;
  };
}

export interface ContentCardSessionCards extends Struct.ComponentSchema {
  collectionName: 'components_content_card_session_cards';
  info: {
    displayName: 'sessionCards';
  };
  attributes: {
    img: Schema.Attribute.String;
    title: Schema.Attribute.String;
    cost: Schema.Attribute.BigInteger;
  };
}

export interface ContentCardSchedules extends Struct.ComponentSchema {
  collectionName: 'components_content_card_schedules';
  info: {
    displayName: 'Schedules';
    description: '';
  };
  attributes: {
    img: Schema.Attribute.String & Schema.Attribute.Required;
    time: Schema.Attribute.Time & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String;
  };
}

export interface ContentCardImageCard extends Struct.ComponentSchema {
  collectionName: 'components_content_card_image_cards';
  info: {
    displayName: 'imageCard';
    description: '';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Text;
  };
}

export interface ATypicalDayDayImage extends Struct.ComponentSchema {
  collectionName: 'components_a_typical_day_day_images';
  info: {
    displayName: 'dayImage';
    description: '';
  };
  attributes: {
    time: Schema.Attribute.Time & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'why-marimeta.img-with-heading': WhyMarimetaImgWithHeading;
      'price.service-and-price': PriceServiceAndPrice;
      'price.canteen-and-laundry': PriceCanteenAndLaundry;
      'content-card.session-cards': ContentCardSessionCards;
      'content-card.schedules': ContentCardSchedules;
      'content-card.image-card': ContentCardImageCard;
      'a-typical-day.day-image': ATypicalDayDayImage;
    }
  }
}
