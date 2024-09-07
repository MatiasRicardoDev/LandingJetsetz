export interface DestinationDetail {
  url: string;
  text: string;
}

export interface Destinations {
  title: string;
  results: DestinationDetail[];
}

export interface DestinationCard {
  title: string;
  background?: string;
}

export interface Ad {
  title: string;
}
