import axios from "axios";
import { getToken } from "./AuthService";

const BASE_REST_API_URL = 'http://localhost:8080/api/accounts';

axios.interceptors.request.use(function (config) {
    
    config.headers['Authorization'] = getToken();

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  
export const getAllAccounts = () => axios.get(BASE_REST_API_URL)

export const getAccount = (id) => axios.get(BASE_REST_API_URL + '/' + id)

export const getAllEmails = () => axios.get(`${BASE_REST_API_URL}/emails`);

 
export const saveAccount = (account) => axios.post(BASE_REST_API_URL, account)

export const deposit = (id, amount) => axios.put(`${BASE_REST_API_URL}/${id}/deposit`, { amount });

export const draft = (id, amount) => axios.put(`${BASE_REST_API_URL}/${id}/draft`, { amount });

export const deleteAccount = (id) => axios.delete(BASE_REST_API_URL + '/' + id)

export const updateAccount = (id, account) => axios.put(BASE_REST_API_URL + '/' + id, account)






