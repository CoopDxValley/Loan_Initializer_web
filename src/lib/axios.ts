import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const axiosConfig = axios.create({
  baseURL: BASE_URL,
});
