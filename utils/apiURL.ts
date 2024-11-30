import axios from "axios";

const baseURL = "https://exam.elevateegy.com/api/v1";

export const apiURL = axios.create({
  baseURL,
});

export const postFetch = async (url: string, data: any) => {
  const res = await fetch(`${baseURL}${url}`, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
  return await res.json();
};
