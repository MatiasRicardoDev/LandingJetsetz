export const getCompareRentalCar = async (data: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rental-car/compare`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  );

  return response.json();
};

export const getInlineCarAds = async (body: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rental-car/ads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const response = await res.json();

  return response;
};
