export const searchRentalCityService = async (q: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rental-car/search/city?search=${q}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return response.json();
};
