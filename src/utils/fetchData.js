import axios from "axios";

export const getData = async (url, token) => {
  const res = await axios.get(`https://guess-what-server.onrender.com${url}`, {
    headers: { Authorization: `Bearer:${token}}` },
    withCredentials: true,
  });

  return res;
};

export const postData = async (url, data, token) => {
  const res = await axios.post(`https://guess-what-server.onrender.com${url}`, data, {
    headers: { Authorization: `Bearer:${token}` },
    withCredentials: true,
  });

  return res;
};
