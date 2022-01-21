import { BACKEND_URL, API_KEY } from "../helper/helper";

export const getData = async (path = "") => {
  const fullUrl = `$${BACKEND_URL}2399953/posts?key=${API_KEY}`;

  const response = await fetch(fullUrl);
  const data = await response.json();

  console.log(data);
  return data;
};
