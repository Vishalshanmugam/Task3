import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // Backend Task1 URL
});

export default api;

