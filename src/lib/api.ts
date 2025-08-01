// lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // or your deployed FastAPI base URL
  withCredentials: true,
});

export default api;
