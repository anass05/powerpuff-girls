import ShowService from '../../../services/show.service';
import actions from './show.actions';

export const loadShowAsync = () => (dispatch) => {
  dispatch(actions.showLoadStart());

  ShowService.getDetails()
    .then((response) => dispatch(actions.showLoadSuccess(response.data)))
    .catch((error) => dispatch(actions.showLoadError(error.message)));
};
