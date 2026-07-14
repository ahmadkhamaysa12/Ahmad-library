import axios from "axios";
import i18next from "i18next";

const authInstance = axios.create({
  baseURL: import.meta.env.VITE_BURL,
  withCredentials: true,
});

authInstance.interceptors.request.use((config) => {
  config.headers["Accept-Language"] = i18next.language;

  return config;
});

export default authInstance;