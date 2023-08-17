export interface Gallery {
  header: string;
  data: string[];
}

export interface VerticalPhotos {
  id: number;
  captionEt: string;
  photoUrlOriginal: string;
  photoUrlBase: string;
}

export interface ItemData {
  id: number;
  heading: string;
  primaryCategoryId: number;
  type: string;
  parentContentPath: string;
  scheduleStart: number;
  hasActiveMedia: boolean;
  canonicalUrl: string;
  verticalPhotos: VerticalPhotos[];
}

export interface Item {
  header: string;
  headerUrl: string;
  highTimeline: boolean;
  manual: {
    highTimeline: boolean;
    banner: boolean;
  };
  data: ItemData[];
}

export interface Answer {
  apiVersion: string;
  data: {
    category: {
      id: number;
      name: string;
      description: string;
      domain: string;
      analyticsId: string;
      gemiusId: string;
      siteContent: string;
      frontPage: Item[];
    };
  };
}
