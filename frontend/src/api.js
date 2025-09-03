import axios from "axios";

axios.defaults.withCredentials = true; // send cookies with requests
axios.defaults.baseURL =
  process.env.REACT_APP_API_URL || "http://localhost:8080";

export default axios;
