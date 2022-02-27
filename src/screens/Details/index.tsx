import React from 'react';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import Details from '../../components/Details';

const Screen: React.FC = () => (
  <Container>
    <Navbar />
    <Details hidePlayButton={true} />
  </Container>
);
export default Screen;
