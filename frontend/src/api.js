import axios from "axios";

axios.defaults.baseURL = "/api"; // proxies to Render via _redirects
axios.defaults.withCredentials = false; // we’re using Bearer, not cookies

export default axios;
