import actionTypes from './episodes.actionTypes';

const episodesLoadStart = () => ({
  type: actionTypes.EPISODES_LOAD_START,
});

const episodesLoadSuccess = (episodes) => ({
  type: actionTypes.EPISODES_LOAD_SUCCESS,
  payload: episodes,
});

const episodesLoadError = (errorMessage) => ({
  type: actionTypes.EPISODES_LOAD_ERROR,
  payload: errorMessage,
});

export default {
  episodesLoadStart,
  episodesLoadSuccess,
  episodesLoadError,
};
