import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistack7-back-end.herokuapp.com"
});

export default api;
