import { Airport } from '@/types/airport';
import { City } from '@/types/city';

/**
 * Format the search results for the flights
 * @param sug (suggestion)
 * @returns string
 */
export const searchFormatsForFlights = (sug: Airport) => {
  try {
    if (sug.country === 'USA') {
      return `${sug?.city}, ${sug.stAbbv}, ${sug?.country} - ${sug?.name} (${sug?.IATA})`;
    }

    return `${sug?.city}, ${sug?.country} - ${sug?.name} (${sug?.IATA})`;
  } catch (e) {
    return '';
  }
};

/**
 * Format the search results for the flights
 * @param sug (suggestion)
 * @returns string
 */
export const searchFormatsForCities = (sug: City | Airport) => {
  try {
    console.log({ sug });

    const airport = sug as Airport;
    const isAirport = airport?.id && sug?.IATA;

    if (isAirport) {
      if (airport?.country === 'USA') {
        return `${airport?.city}, ${airport.stAbbv}, ${airport?.country} - ${airport?.name} (${airport?.IATA})`;
      } else {
        return `${airport?.city}, ${airport?.country} - ${airport?.name} (${airport?.IATA})`;
      }
    }

    const city = sug as City;

    return city?.location_name;
  } catch (e) {
    return '';
  }
};
