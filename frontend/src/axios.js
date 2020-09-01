import axios from "axios";

const instance = axios.create({
  baseURL: window.location.origin + "/api/",
  // baseURL: "http://localhost:8000/api/",
  // withCredentials: true,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
});

export default instance;
