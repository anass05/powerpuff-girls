import { combineReducers } from 'redux';
import showReducer from './show/show.reducer';
import episodesReducer from './episodes/episodes.reducer';

const rootReducer = () =>
  combineReducers({
    show: showReducer,
    episodes: episodesReducer
  });

export default rootReducer;
