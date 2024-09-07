import { format } from 'date-fns';

import { getKayakCountry } from '@/utils/kayakCountries';
import { aId, pValue } from '@/utils/kayakPValue';

const enc_lid = `compare_fligths`;

interface FormProps {
  origin?: string;
  originName?: string;
  firstDate?: Date;
  secondDate?: Date;
  adults?: number;
  children?: number;
  rooms?: number;
}

export const openDeepLinkTab = ({
  origin,
  originName,
  firstDate,
  secondDate,
  adults = 1,
  children = 0,
  rooms = 1
}: FormProps) => {
  const type = 'hotels';

  const f1 = firstDate ? firstDate : new Date();
  const f2 = secondDate ? secondDate : new Date();
  const formattedDate = format(f1, 'yyyy-MM-dd');
  const formattedDate2 = format(f2, 'yyyy-MM-dd');

  let childrenText = '';

  if (children > 0) {
    childrenText = `/${children}children`;
  }

  /**
   * Use DeepLink feature (open a new url in a new tab)
   *
   * Format:
   * https://{KAYAK_Domain}/in?a={Affiliate_ID}&url=/hotels/{City_Details},{Country/State}/{Check-In_Date}/{Check-Out_Date}/{Number_ Adults}/{Number_rooms}
   * https://www.kayak.co.uk/in?a=amazingaffiliate&url=/hotels/Newcastle-upon-Tyne,United-Kingdom/2020-11-29/2020-12-01/2adults /2rooms
   */
  const kayakDomain = getKayakCountry();
  const deepLinkUrl = `https://${kayakDomain}/in?a=${aId}&enc_eid=0&enc_lid=${enc_lid}&encoder=27_1&enc_pid=deeplinks&url=/${type}/${origin}/${formattedDate}/${formattedDate2}/${adults}adults${childrenText}/${rooms}rooms?sort=rank_a`;
  const deepLinkCheapflights = `https://www.cheapflights.com/in?a=${aId}&enc_eid=0&enc_lid=${enc_lid}&encoder=27_1&enc_pid=deeplinks&url=/flights/${origin}/${formattedDate}/${formattedDate2}/${adults}adults${childrenText}?sort=rank_a`;

  /**
   * Use our own compare results page
   * */
  const comparePanelUrl = `/compare-results?type=${type}&origin=${origin}&originName=${originName}&firstDate=${formattedDate}&secondDate=${formattedDate2}&adults=${adults}&rooms=${rooms}&children=${children}`;

  if (typeof window !== 'undefined') {
    window.deepLinkUrl = deepLinkUrl; //enabled
    window.comparePanelUrl = comparePanelUrl; //enabled
    window.deepLinkCheapflights = deepLinkCheapflights; //enabled
  }

  return {
    deepLinkUrl,
    comparePanelUrl,
    deepLinkCheapflights
  };
};
