import React from 'react';
import { EpisodeContainer, EpisodeNumber, Thumbnail } from './styles';

type Props = {
  key: string;
  episode: string;
  season: string;
  thumbnail: string;
  onClick: () => void;
};
const Episode: React.FC<Props> = ({
  key,
  episode,
  season,
  thumbnail,
  onClick
}) => {
  return (
    <EpisodeContainer key={key} onClick={onClick}>
      <Thumbnail src={thumbnail} />
      <EpisodeNumber>
        S{season} &nbsp;EP{episode}
      </EpisodeNumber>
    </EpisodeContainer>
  );
};

export default Episode;
