export const getCompareFlights = async (data: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${data.type ?? 'flights'}/compare`,
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

export const getInlineFlightsAds = async (body: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${body.type}/ads`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  );

  const response = await res.json();

  return response;
};
