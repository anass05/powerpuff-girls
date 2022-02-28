import EpisodesService from '../../../services/episodes.service';
import actions from './episodes.actions';

export const loadEpisodesAsync = () => (dispatch) => {
  dispatch(actions.episodesLoadStart());

  EpisodesService.getEpisodes()
    .then((response) => dispatch(actions.episodesLoadSuccess(response.data)))
    .catch((error) => dispatch(actions.episodesLoadError(error.message)));
};
