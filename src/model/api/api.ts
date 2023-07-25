import axios, { AxiosInstance, AxiosError } from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";

const redirectToErrorPage = (navigate: NavigateFunction) => {
  navigate("/erro");
};

const api: AxiosInstance = axios.create({
  baseURL: "http://tecnovia.rj.r.appspot.com/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error: AxiosError) => {
    if (error.response?.status === 500) {
      const navigate = useNavigate();
      redirectToErrorPage(navigate);
    }
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    if (error.response?.status === 500) {
      const navigate = useNavigate();
      redirectToErrorPage(navigate);
    }
    return Promise.reject(error);
  }
);

export default api;
