import React from 'react';
import Navbar from 'components/Navbar';
import Container from 'components/Container';
import Details from 'components/Details';
import { useParams } from 'react-router-dom';

const Screen: React.FC = () => {
  const { name, image, summary } = useParams();

  return (
    <Container background={image}>
      <Navbar title={name} />
      <Details hidePlayButton={true} title={name} description={summary} />
    </Container>
  );
};
export default Screen;
