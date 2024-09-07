export const searchAirportService = async (q: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/flights/search/airports?search=${q}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return response.json();
};
