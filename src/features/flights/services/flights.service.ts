import { addClickLink } from "../utils/adbutlerHelpers";

export const getCompareFlights = async (data: any) => {
  const url =`${process.env.NEXT_PUBLIC_API_URL}/${data.type ?? 'flights'}/compare`
  const response = await fetch(
    url,
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
  const url =`${process.env.NEXT_PUBLIC_API_URL}/${body.type}/ads`;
  
  const res = await fetch(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  );

  const response = await res.json();

  response.compareToItems = addClickLink(response.compareToItems) 

  return response;
};
