import axios from 'axios';
import { HttpClient } from './types';

export const axiosHttpClient: HttpClient = {
  get: async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  },
};
