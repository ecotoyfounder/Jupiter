export interface Movies {
  id?: number;
  heading?: string;
  canonicalUrl?: string;
}

export interface ItemData {
  id: number,
  heading: string,
  primaryCategoryId: number,
  type: string,
  parentContentPath: string,
  scheduleStart: number,
  hasActiveMedia: boolean,
  canonicalUrl?: string;
}


export interface Item {
  header: string,
  headerUrl: string,
  highTimeline: boolean,
  manual: {
    highTimeline: boolean,
    banner: boolean
  },
  data: ItemData[]
}


export interface Answer {
  apiVersion: string;
  data: {
    category: {
      id: number,
      name: string,
      description: string,
      domain: string,
      analyticsId: string,
      gemiusId: string,
      siteContent: string,
      frontPage: Item[]
    }
  };
}
