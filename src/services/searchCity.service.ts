export const searchCityService = async (q: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hotels/search/city?search=${q}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return response.json();
};
