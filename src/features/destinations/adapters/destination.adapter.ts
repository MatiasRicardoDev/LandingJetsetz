import {
  generateBackgroundUrlAdapter,
  generateUrlAdapter
} from './url.adapter';

const DESTINATION_TYPES: Record<string, string> = {
  ft: 'flight',
  rc: 'rentalCar',
  h: 'hotel'
};

export const destinationFamilyAdapter = (data: any) => {
  const family = (data?.family ?? [])
    .filter((destination: { profile_type: string }) =>
      ['ft', 'rc', 'h'].includes(destination?.profile_type)
    )
    .map(
      (destination: {
        profile_name: string;
        profile_url: string;
        destination_name: string;
        profile_deals_photo: string;
      }) => ({
        ...destination,
        background: generateBackgroundUrlAdapter(
          destination.profile_deals_photo
        ),
        destinationName: destination?.destination_name,
        name: destination?.profile_name,
        title: destination?.profile_name,
        url: generateUrlAdapter(destination?.profile_url)
      })
    );

  return family;
};

export const destinationAdapter = (data: any) => {
  const destinationName = data?.destination_name ?? '';
  const tips = data?.profile_overview ?? '';
  const thingsToDo = (data?.links ?? [])
    .filter((link: { dlink_type: string }) => link?.dlink_type === 'ttd')
    .map((link: { dlink_text: string }) => ({ name: link?.dlink_text }));

  const family = destinationFamilyAdapter(data);
  const snapshotGallery = generateBackgroundUrlAdapter(
    data?.profile_deals_photo
  );

  const destinationType = DESTINATION_TYPES[data?.profile_type ?? 'ft'];

  return {
    ...data,
    destinationName,
    destinationType,
    family,
    snapshotGallery,
    thingsToDo,
    tips
  };
};
