export const getBannerDeal = (destinationName: string, type = 'flight') => {
  if (type === 'hotel') {
    return {
      title: `Cheap Business & First Class Flights To ${destinationName}`,
      items: [
        {
          heading: 'Cheap Business & First Class Flights',
          description: `Book online & save big on first or business class flights to ${destinationName}.`
        },
        {
          heading: 'Largest Selection Of First & Business Class Flights',
          description: `Find the largest selection of first & business class flights to ${destinationName}.`
        },
        {
          heading: 'Last Minute First & Business Class Flight Deals',
          description: `Save big on ${destinationName} first & business class flights with our last-minute airline tickets.`
        },
        {
          heading: 'Business & First Class Airfare Specialist',
          description: `We specialize in first class & business class flights to ${destinationName}.`
        }
      ],
      bannerUrl: '/contact-us',
      bannerImage: '/images/hotel_side_banner.png',
      bannerAlt: 'Hotel Deals'
    };
  }

  return {
    title: `Save Big On Flights To ${destinationName} With Jetsetz`,
    items: [
      {
        heading: `Cheap Tickets To ${destinationName}`,
        description: `Save big on flights to ${destinationName} with our cheap plane tickets.`
      },
      {
        heading: 'International Flight Specialist',
        description: `Utilize our wholesale rates and save 100’s on your ${destinationName} airline tickets.`
      },
      {
        heading: 'Last Minute Flights Deals',
        description: `Take advantage of our last minute flight deals to ${destinationName} and save a bundle.`
      },
      {
        heading: 'Largest Selection Of Flights',
        description: `Search our extensive database to find the largest selection of flights to ${destinationName}.`
      }
    ],
    bannerUrl: '/cheap-business-class-flights',
    bannerImage: '/images/home_side_banner.png',
    bannerAlt: 'Cheap Business Class Flights'
  };
};
