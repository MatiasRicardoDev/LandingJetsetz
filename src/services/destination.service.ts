export const destinationService = async (q: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/destination/name/${q}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return response.json();
};
