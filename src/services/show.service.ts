import { axiosInstance } from 'helpers/axiosInstance';
import { API_URIS } from '../constants';

class ShowService {
  getDetails = () => axiosInstance().get(API_URIS.details);
}
export default new ShowService();
