import axios from "axios";
axios.defaults.withCredentials = true;

const API_URL = "https://smidig-tidvis-backend.herokuapp.com/api";

export const fetchData = async (url) => {
  const res = await axios.get(API_URL + url);
  return res.data;
};

export const postData = async (url, jsonData) => {
  const res = await axios.post(API_URL + url, jsonData);
  return res.data;
};

export const deleteData = async (url) => {
  const res = await axios.delete(API_URL + url);
  return res.data;
};
