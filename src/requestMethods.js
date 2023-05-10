import axios from "axios";

const BASE_URL = "https://tee-society-app-server.onrender.com";

export const requestMethod = axios.create({
  baseURL: BASE_URL,
});
