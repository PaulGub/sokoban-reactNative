import axios from 'axios';
import CONST from "../CONST";

const axiosInstance = axios.create({
  baseURL: CONST.API_BASE_URI,
  timeout: 150000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
});

export default {
  get: async (endpoint, config) => {
    try {
      return await axiosInstance.get(endpoint, config);
    } catch (error) {
      console.log(error);
      return error.response;
    }
  },
};