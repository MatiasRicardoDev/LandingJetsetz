export interface Airport {
  id: number;
  name: string;
  city: string;
  state?: string;
  stAbbv?: string;
  addRef?: string;
  country: string;
  IATA: string;
  latitude: number;
  longitude: number;
  altitude?: number;
  timezone?: string;
  dst?: string;
  group?: string;
  priority?: number;
  citypopulation?: number;
}
