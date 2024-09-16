import { addClickLink } from "../utils/adbutlerHelpers";

export const getCompareFlights = async (data: any) => {
  const url =`${process.env.NEXT_PUBLIC_API_URL}/${data.type ?? 'flights'}/compare`
  //const url =`http://localhost:8000/api/${data.type ?? 'flights'}/compare`
  console.log("ESTA ES LA URL ==> ",url);
  console.log("Este el body ==> ",JSON.stringify(data))
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
  //const url =`http://localhost:8000/api/${body.type ?? 'flights'}/compare`
  console.log("ESTA ES LA URL (getinlineFlightAds) ==> ",url);
  console.log("Este el body (getinlineFlightAds) ==> ",JSON.stringify(body))
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
