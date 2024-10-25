import { format } from 'date-fns';

import { getKayakCountry } from '@/utils/kayakCountries';
import { aId, pValue } from '@/utils/kayakPValue';

import { LinkGenerator } from './deppLinksList';

const enc_lid = `compare_fligths`;

interface FormProps {
  origin?: string;
  destination?: string;
  firstDate?: Date;
  secondDate?: Date;
  adults?: number;
  children?: number;
  cabinClass?: string;
  tripType?: string;
  rooms?: number;
}

export const openDeepLinkTab = (
  { 
    origin,
    destination,
    firstDate,
    secondDate,
    adults = 1,
    children = 0,
    rooms = 0,
    cabinClass = 'economy',
    tripType = 'roundtrip'
  }: FormProps,
  type = 'flights'
) => {
  const f1 = firstDate ? firstDate : new Date();
  const f2 = secondDate ? secondDate : new Date();
  const formattedDate = format(f1, 'yyyy-MM-dd');
  const formattedDate2 = format(f2, 'yyyy-MM-dd');

  const tripTypeCode = tripType === 'roundtrip' ? 2 : 1;

  let childrenText = '';

  if (children > 0) {
    childrenText = `/${children}children`;
  }

  var generator:LinkGenerator = new LinkGenerator();
  generator.aId = aId;
  generator.enc_lid = enc_lid;
  generator.origin = origin;
  generator.destination = destination;
  generator.formattedDate = formattedDate;
  generator.formattedDate2 = formattedDate2;
  generator.cabinClass = cabinClass;
  generator.adults = adults;
  generator.childrenText = childrenText;
  generator.pValue = pValue;
  generator.tripTypeCode = tripTypeCode;

  const linksGenerados = generator.getLink()

  const deepLinkMomondoUrl = linksGenerados[0].link;
  const deepLinkUrl = linksGenerados[1].link;
  const deepLinkCheapflights = linksGenerados[2].link;
  const deepLinkSmartFaresUrl = linksGenerados[3].link;
  localStorage.removeItem('cf_link');
  localStorage.setItem('cf_link',linksGenerados[2].link);

  /**
   * Use our own compare results page
   * */
  const comparePanelUrl = `/compare-results?origin=${origin}&destination=${destination}&firstDate=${formattedDate}&secondDate=${formattedDate2}&adults=${adults}&children=${children}&cabinClass=${cabinClass}&tripType=${tripType}&rooms=${rooms}&type=${type}`;



  if (typeof window !== 'undefined') {
    window.deepLinkUrl = deepLinkUrl; //enabled
    window.deepLinkMomondoUrl = deepLinkMomondoUrl; //enabled
    window.deepLinkSmartFaresUrl = deepLinkSmartFaresUrl; //enabled
    window.deepLinkCheapflights = deepLinkCheapflights; //enabled
    window.comparePanelUrl = comparePanelUrl; //enabled
  }

  return {
    deepLinkUrl,
    deepLinkMomondoUrl,
    deepLinkSmartFaresUrl,
    deepLinkCheapflights,
    comparePanelUrl
  };
};
