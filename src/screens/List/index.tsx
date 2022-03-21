import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadShowAsync } from 'redux/reducers/show/show.thunks';
import { loadEpisodesAsync } from 'redux/reducers/episodes/episodes.thunks';
import getEpisodesSelector from 'redux/selectors/episodes.selector';
import getShowSelector from 'redux/selectors/show.selector';
import View from './View';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../constants';

type State = {
  show: {
    isLoading: false;
    data: any;
    errorMessage: null;
  };
  episodes: {
    isLoading: false;
    data: any;
    errorMessage: null;
  };
};

const Screen: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { episodes, show } = useSelector((state: State) => state);
  const episodesList = getEpisodesSelector(episodes);
  const showDetails = getShowSelector(show);

  const goToEpisode = (name: string, summary: string, image: string) => {
    navigate(
      routes.details
        .replace(':name', encodeURIComponent(name))
        .replace(':summary', encodeURIComponent(summary))
        .replace(':image', encodeURIComponent(image))
    );
  };
  useEffect(() => {
    dispatch(loadShowAsync());
    dispatch(loadEpisodesAsync());
  }, []);
  return (
    <>
      {showDetails && episodesList && (
        <View
          show={showDetails}
          episodes={episodesList}
          onEpisodeClick={goToEpisode}
        />
      )}
    </>
  );
};
export default Screen;
