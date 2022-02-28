import axios from 'axios';
import { API_URIS } from '../constants';

export const axiosInstance = () =>
  axios.create({ baseURL: API_URIS.base_url, responseType: 'json' });
