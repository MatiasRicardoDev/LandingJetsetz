export interface SearchForm {
  origin: string | undefined;
  destination?: string | undefined;
  source?: string | undefined;
  firstDate: Date | undefined;
  secondDate?: Date | undefined;
}

export interface FlightSearchForm extends SearchForm {
  adults?: number | undefined;
  children?: number | undefined;
  cabinClass?: string | undefined;
  tripType?: string | undefined;
}

export interface HotelSearchForm extends SearchForm {
  originName?: string | undefined;
  adults?: number;
  children?: number;
  rooms?: number;
}

export interface CarSearchForm extends SearchForm {
  originName?: string | undefined;
  destinationName?: string | undefined;
  pickUpTime?: string | undefined;
  dropOffTime?: string | undefined;
}
