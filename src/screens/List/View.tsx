import React from 'react';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import Details from '../../components/Details';
import Episodes from '../../components/Episodes';

type Props = {
  show: any;
  episodes: any;
  onEpisodeClick: (name: string, summary: string, image: string) => void;
};
const Screen: React.FC<Props> = ({ show, episodes, onEpisodeClick }) => {
  return (
    <Container background={show?.image?.original}>
      <Navbar title={show?.name} hideBackButton />
      <Details
        hidePlayButton={false}
        title={show?.name}
        description={show?.summary}
        genres={show?.genres}
      />
      <Episodes episodes={episodes} onEpisodeClick={onEpisodeClick} />
    </Container>
  );
};
export default Screen;
