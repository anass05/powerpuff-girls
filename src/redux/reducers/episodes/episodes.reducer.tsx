import actionTypes from './episodes.actionTypes';
import initialState from './episodes.initialState';

const episodesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.EPISODES_LOAD_START:
      return {
        ...state,
        isLoading: true,
        data: null,
        errorMessage: null
      };

    case actionTypes.EPISODES_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload
      };

    case actionTypes.EPISODES_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload
      };

    default:
      return state;
  }
};

export default episodesReducer;
