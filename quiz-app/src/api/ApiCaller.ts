import axios from 'axios';
import { API_URL } from 'constants/configs';

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

export const errorHandler = (error: any) => {
  return Promise.reject(error);
};

export const responseHandler = async (response: any) => {
  if (response.status === 401) {
    localStorage.removeItem('Token');
    const win: Window = window;
    win.location = '/login';
  }
  return response;
};

export const requestHandler = async (request: any) => {
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
