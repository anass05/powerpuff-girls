import actionTypes from './show.actionTypes';

const showLoadStart = () => ({
  type: actionTypes.SHOW_LOAD_START,
});

const showLoadSuccess = (show) => ({
  type: actionTypes.SHOW_LOAD_SUCCESS,
  payload: show,
});

const showLoadError = (errorMessage) => ({
  type: actionTypes.SHOW_LOAD_ERROR,
  payload: errorMessage,
});

export default {
  showLoadStart,
  showLoadSuccess,
  showLoadError,
};
