import axios from 'axios';

const domain = 'http://localhost:3333';

// add domain to config url
axios.interceptors.request.use((config) => ({
  ...config,
  url: domain + config.url,
}));

// tranform response and handle errors
axios.interceptors.response.use((response) => {
  console.log(response);
  return response.data;
}, (err) => {
  console.log(err);
  Promise.reject(err);
});

export const get = (url) => axios.get(url);

export const post = (url, params) => axios.post(url, params);

export const put = (url, params) => axios.put(url, params);

export const del = (url, params) => axios.del(url, params);
