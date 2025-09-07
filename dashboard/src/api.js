import axios from "axios";
axios.defaults.baseURL = "/api";
axios.defaults.withCredentials = true; // send cookies
// axios.defaults.baseURL =
//   process.env.REACT_APP_API_URL || "http://localhost:8080"; // Render URL in Netlify

export default axios;
