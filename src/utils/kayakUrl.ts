import { pValue } from './kayakPValue';

export const AFF_ID = process.env.NEXT_PUBLIC_KAYAK_AFFILIATE_ID;

interface IParams {
  compareToItems?: any;
  searchId?: string;
}

export const getClusterFromUrl = (url: string): string => {
  const urlParams = new URLSearchParams(url);

  return urlParams.get('cluster') || '4';
};

export const getSearchIdFromUrl = (url: string): string => {
  const urlParams = new URLSearchParams(url);

  return urlParams.get('searchId') || '';
};

export const getParamsFromCompareToItems = (data?: IParams): any => {
  if ((data?.compareToItems || []).length < 1) {
    return '4';
  }

  const url = data?.compareToItems[0]?.impressionUrl ?? '';

  return {
    clusterId: getClusterFromUrl(url),
    searchId: getSearchIdFromUrl(url)
  };
};

export const generateIframeUrl = (data?: IParams): string => {
  if (!data || (data?.compareToItems || []).length < 1) {
    return '';
  }

  const providerCodes = (data?.compareToItems || []).map((item: any) => {
    return item.providerCode;
  });

  const { clusterId, searchId } = getParamsFromCompareToItems(data) ?? {};

  return `https://www.kayak.com/in?a=${AFF_ID}&cluster=${clusterId}&url=/providers/simple-window?providerCodes=${String(
    providerCodes
  )}&showOn=panel&searchId=${searchId}`;
};

export const getDeepIframeUrl = (data?: { deepLink: string,name?:string }): string => {
  if(data?.name == 'CheapFlights'){
    return localStorage.getItem('cf_link') || '';
  }else{
    return `https://www.kayak.com${data?.deepLink}&p=${pValue}`;
  }
};

export const getImpressionUrl = (data?: { impressionUrl: string }): string => {
  return `https://www.kayak.com${data?.impressionUrl}&p=${pValue}`;
};
