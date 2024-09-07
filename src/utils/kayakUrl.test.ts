import { describe, expect, it } from 'vitest';

import { AFF_ID, generateIframeUrl } from './kayakUrl';

describe('generateIframeUrl', () => {
  it('should return an empty string when no data is provided', () => {
    expect(generateIframeUrl(undefined)).toEqual('');
  });

  it('should return an empty string when there are no compare to items', () => {
    expect(generateIframeUrl({ compareToItems: [] })).toEqual('');
  });

  it('should generate a valid iframe URL when compare to items are provided', () => {
    const kayakId = AFF_ID ?? `kan_256653_567307`;

    const data = {
      compareToItems: [
        {
          deepLink: `/s/clickthrough.jsp?plid=5262535&cpnid=7068665&ctyp=Search&ptyp=F&orig=F..RP..R0&octid=&pid=KYKAffiliate_US_FCMP2&prv=KYKAffiliate_US_FCMP2&srch=bhDCFSYxpl&ploc=US&lid=KYKAffiliate_US_FCMP2-bhDCFSYxpl&c2c=&xp=t_fjUkH$oYyE3_JzqAGjEA==&qadults=1&qrooms=0&qtravelers=1&qorig=Airport:MGA&qdest=Airport:MIA&qstart=1679544000000&qend=1680062400000&qshour=-1&qehour=-1&qow=false&qfcc=e&qdctid=14305&qdac=MIA&resid=&bookid=&stid=&qns=false&qnearby=3&qnearbyo=true&qnearbyd=true&qcages=&qinfantseat=0&qinfantlap=0&qsenior=0&qdac=MIA&qoac=MGA&qyouths=0&xpExt=&aidExt=${kayakId}&atype=cmp2&displayRail=right&h=&ah=McmDVIqjw7h0qNbncF3JaRNq0$ANcuDcNH0EFzfuZhs&pj=_7$xbeHFAS_WxFBqg8khfA==&_sid_=R-4iYkdyqN5tu_mq42Fw4Dt-I_g_2atxPI8Ah2oFk4UVy9mBvZlMaP04qxUa_waN1&rank=2`,
          rank: 2,
          termId: 35840669,
          precheck: 'unselected',
          impressionUrl:
            '/s/impression/cmp2?providerCode=KYKAffiliate_US_FCMP2&productType=F&searchId=bhDCFSYxpl&pageOrigin=F..RP..R0&showOn=panel&rank=2&origin=aid:MGA&displayRail=right&destination=aid:MIA&numberOfDays=6&railsize=3&_sid_=R-4iYkdyqN5tu_mq42Fw4Dt-I_g_2atxPI8Ah2oFk4UVy9mBvZlMaP04qxUa_waN1&aidExt=kan_256653_567307&cluster=5',
          logoUrl: '/rimg/kimg/logos/fc0e6104750ed908.png',
          providerCode: 'provider1',
          name: 'KAYAK',
          id: '5262535'
        },
        {
          deepLink: `/s/clickthrough.jsp?plid=5253185&cpnid=7068665&ctyp=Search&ptyp=F&orig=F..RP..R0&octid=&pid=Cheapflights_US_FCMP2&prv=Cheapflights_US_FCMP2&srch=bhDCFSYxpl&ploc=US&lid=Cheapflights_US_FCMP2-bhDCFSYxpl&c2c=&xp=t_fjUkH$oYyE3_JzqAGjEA==&qadults=1&qrooms=0&qtravelers=1&qorig=Airport:MGA&qdest=Airport:MIA&qstart=1679544000000&qend=1680062400000&qshour=-1&qehour=-1&qow=false&qfcc=e&qdctid=14305&qdac=MIA&resid=&bookid=&stid=&qns=false&qnearby=3&qnearbyo=true&qnearbyd=true&qcages=&qinfantseat=0&qinfantlap=0&qsenior=0&qdac=MIA&qoac=MGA&qyouths=0&xpExt=&aidExt=${kayakId}&atype=cmp2&displayRail=right&h=&ah=zlAvtXN0n10nG1rCYLM7cFlOlq6GOYucgpcaOwL9H84&pj=FwXvCqsfOSMGvFkSKpGVlg==&_sid_=R-4iYkdyqN5tu_mq42Fw4Dt-I_g_2atxPI8Ah2oFk4UVy9mBvZlMaP04qxUa_waN1&rank=3`,
          rank: 3,
          termId: 32662619,
          precheck: 'unselected',
          impressionUrl: `/s/impression/cmp2?providerCode=Cheapflights_US_FCMP2&productType=F&searchId=bhDCFSYxpl&pageOrigin=F..RP..R0&showOn=panel&rank=3&origin=aid:MGA&displayRail=right&destination=aid:MIA&numberOfDays=6&railsize=3&_sid_=R-4iYkdyqN5tu_mq42Fw4Dt-I_g_2atxPI8Ah2oFk4UVy9mBvZlMaP04qxUa_waN1&aidExt=${kayakId}&cluster=5`,
          logoUrl: '/rimg/kimg/logos/f58e780038cf6647.png',
          providerCode: 'provider2',
          name: 'Cheapflights',
          id: '5253185'
        }
      ]
    };
    const expectedUrl = `https://www.kayak.com/in?a=${AFF_ID}&cluster=5&url=/providers/simple-window?providerCodes=provider1,provider2&showOn=panel&searchId=bhDCFSYxpl`;

    expect(generateIframeUrl(data)).toEqual(expectedUrl);
  });
});
