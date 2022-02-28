import actionTypes from './show.actionTypes';
import initialState from './show.initialState';

const showReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SHOW_LOAD_START:
      return {
        ...state,
        isLoading: true,
        data: null,
        errorMessage: null,
      };

    case actionTypes.SHOW_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };

    case actionTypes.SHOW_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

export default showReducer;
