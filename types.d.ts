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
  children?: JSX.Element;
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

export interface TeamsStatsInterface {
  Teams: string;
  Points: string;
  Wins: string;
  Losses: string;
  Draws: string;
  'Games-Played': string;
  'Goal-Difference': string;
  'Goals-Against': string;
  'Goals-For': string;
}

export interface PlayersStatsInterface {
  Name?: string;
  League?: string;
  Team?: string;
  Position?: string;
  'Games-Played'?: string;
  Goals?: string;
  Assists?: string;
  'Total-Points'?: string;
  'Points-per Game'?: string;
}

export interface GoaliesStatsInterface {
  Name: string;
  League: string;
  Team: string;
  Position: string;
  'Games-Played': string;
  'Goals-Against': string;
  'Total-Shots': string;
  // 'Save-%': string;
}
