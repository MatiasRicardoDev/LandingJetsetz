import { format } from 'date-fns';

import { getKayakCountry } from '@/utils/kayakCountries';
import { aId, pValue } from '@/utils/kayakPValue';

const enc_lid = `compare_fligths`;

interface FormProps {
  origin?: string;
  originName?: string;
  destination?: string;
  destinationName?: string;
  firstDate?: Date;
  secondDate?: Date;
  pickUpTime?: string;
  dropOffTime?: string;
}

const formattedTime = (str: string) => {
  const time = str.replace(/AM|PM/, '');

  if (str.includes('PM')) {
    return time + 12;
  }

  return time;
};

export const openDeepLinkTab = ({
  origin,
  originName,
  destination,
  destinationName,
  firstDate,
  secondDate,
  pickUpTime = '12PM',
  dropOffTime = '12PM'
}: FormProps) => {
  const type = 'cars';

  const f1 = firstDate ? firstDate : new Date();
  const f2 = secondDate ? secondDate : new Date();
  const formattedDate = format(f1, 'yyyy-MM-dd');
  const formattedDate2 = format(f2, 'yyyy-MM-dd');

  const formattedPickUpTime = formattedTime(pickUpTime);
  const formattedDropOffTime = formattedTime(dropOffTime);

  /**
   * Use DeepLink feature (open a new url in a new tab)
   *
   * Format:
   * https://{KAYAK_Domain}/in?a={Affiliate_ID}&url=/cars/{Pick_Up_Destination}/{Drop_Off_Destination}/{Pick_Up_Date_Hour}/{Drop_Off_Date_Hour}/
   * Example:
   * https://www.kayak.com/in?a=awesomecars&url=/cars/Los-Angeles,CA/SFO/2020-12-02/2020-12-05/
   */
  const kayakDomain = getKayakCountry();
  const deepLinkUrl = `https://${kayakDomain}/in?a=${aId}&enc_eid=0&enc_lid=${enc_lid}&encoder=27_1&enc_pid=deeplinks&url=/${type}/${origin}/${destination}/${formattedDate}-${formattedPickUpTime}h/${formattedDate2}-${formattedDropOffTime}h?sort=rank_a`;
  const deepLinkCheapflights = `https://www.cheapflights.com/in?a=${aId}&enc_eid=0&enc_lid=${enc_lid}&encoder=27_1&enc_pid=deeplinks&url=/car-rental/${origin}-${destination}/${formattedDate}-${formattedPickUpTime}h/${formattedDate2}-${formattedDropOffTime}h?sort=rank_a`;

  /**
   * Use our own compare results page
   * */
  const comparePanelUrl = `/compare-results?type=${type}&origin=${origin}&originName=${originName}&destination=${destination}&destinationName=${destinationName}&firstDate=${formattedDate}&secondDate=${formattedDate2}&pickUpTime=${pickUpTime}&dropOffTime=${dropOffTime}`;

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
