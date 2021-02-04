import { Document } from '@contentful/rich-text-types';

export interface PostInterface {
  heroImage: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  title: string;
  description: string;
  publishDate: string;
  slug: string;
  body: Document;
}

export interface ContentfulImageInterface {
  fields: {
    file: {
      url: string;
    };
    title: string;
  };
}

export interface GenericContentfulPageInterface {
  fields: {
    ogDescript?: string;
    title: string;
    description: string;
    subtitle1: Document;
    contentBlock1: Document;
    subtitle2: Document;
    contentBlock2: Document;
    images: [
      {
        fields: {
          title: string;
          file: {
            url: string;
          };
        };
      }
    ];
  };
}

export interface PlayTableRowInterface {
  link: string;
  title: string;
  description: string;
  day: string;
  time: string;
}
