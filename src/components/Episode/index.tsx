import React from 'react';
import {
  EpisodeContainer,
  EpisodeNumber,
  Thumbnail,
  Clickable,
} from './styles';

type Props = {
  key: string;
  value: string;
};
const Episode: React.FC<Props> = ({ key, value }) => {
  return (
    <EpisodeContainer key={key}>
      <Thumbnail src={'https://placekitten.com/300/146'} />
      <EpisodeNumber>{value}</EpisodeNumber>
      <Clickable />
    </EpisodeContainer>
  );
};

export default Episode;
