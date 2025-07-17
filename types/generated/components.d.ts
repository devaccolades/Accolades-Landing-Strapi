import type { Schema, Struct } from '@strapi/strapi';

export interface SharedPartnerVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_partner_videos';
  info: {
    displayName: 'partnerVideo';
  };
  attributes: {
    clientName: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    video: Schema.Attribute.Media<'videos'>;
    videoType: Schema.Attribute.String;
  };
}

export interface SharedTestText extends Struct.ComponentSchema {
  collectionName: 'components_shared_test_texts';
  info: {
    displayName: 'testText';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    personImage: Schema.Attribute.Media<'images'>;
    position: Schema.Attribute.String;
    testimonilaText: Schema.Attribute.Text;
  };
}

export interface SharedTestVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_test_videos';
  info: {
    displayName: 'testVideo';
  };
  attributes: {
    name: Schema.Attribute.String;
    onePosterImage: Schema.Attribute.Media<'images'>;
    oneVideoofTest: Schema.Attribute.Media<'videos'>;
    position: Schema.Attribute.String;
  };
}

export interface SharedVideoItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_items';
  info: {
    displayName: 'VideoItem';
  };
  attributes: {
    orientation: Schema.Attribute.Enumeration<['vertical', 'horizontal']>;
    poster: Schema.Attribute.Media<'images'>;
    video: Schema.Attribute.Media<'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.partner-video': SharedPartnerVideo;
      'shared.test-text': SharedTestText;
      'shared.test-video': SharedTestVideo;
      'shared.video-item': SharedVideoItem;
    }
  }
}
