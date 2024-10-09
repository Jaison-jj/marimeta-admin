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

export interface ATypicalDayDayImage extends Struct.ComponentSchema {
  collectionName: 'components_a_typical_day_day_images';
  info: {
    displayName: 'dayImage';
    description: '';
  };
  attributes: {
    time: Schema.Attribute.Time;
    title: Schema.Attribute.String;
    image: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'why-marimeta.img-with-heading': WhyMarimetaImgWithHeading;
      'price.service-and-price': PriceServiceAndPrice;
      'price.canteen-and-laundry': PriceCanteenAndLaundry;
      'content-card.session-cards': ContentCardSessionCards;
      'a-typical-day.day-image': ATypicalDayDayImage;
    }
  }
}
