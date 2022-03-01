import { axiosInstance } from 'helpers/axiosInstance';
import { API_URIS } from '../constants';

class EpisodesService {
  getEpisodes = () => axiosInstance().get(API_URIS.episodes);
}
export default new EpisodesService();
