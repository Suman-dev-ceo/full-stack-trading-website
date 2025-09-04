import axios from "axios";

const api = axios.create({
  baseURL: "/api", // handled by Netlify _redirects
  withCredentials: true, // send cookies with requests
});

export default api;
