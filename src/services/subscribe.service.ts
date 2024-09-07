export const subscribeUser = async (body: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const response = await res.json();

  return response;
};
