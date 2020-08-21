import axios from "axios";

const instance = axios.create({
  baseURL: window.location.origin + "/api/",
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
});

export default instance;
