import axios from "axios";
import { API_URL } from "constants/configs";
const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "content-type": "application/json",
  },
});

const errorHandler = error => {
  return Promise.reject(error);
};

const responseHandler = async response => {
  if (response.status === 401) {
    localStorage.removeItem('Token')
    window.location = "/login";
  }
  return response;
};

const requestHandler = async request => {
  const Token = localStorage.getItem('token') ?? '';
  if (Token) {
    request.headers.Authorization = `Bearer ${Token}`;
  }
  return request;
};

axiosClient.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

axiosClient.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default axiosClient;