export const PRODUCTS_ENDPOINT =
  'https://6222994f666291106a29f999.mockapi.io/api/v1/products';
export const getProducts = async () => {
  const response = await fetch(PRODUCTS_ENDPOINT);
  return await response.json();
};
