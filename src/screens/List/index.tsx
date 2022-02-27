import React from 'react';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import Details from '../../components/Details';
import Episodes from '../../components/Episodes';

const Screen: React.FC = () => (
  <Container>
    <Navbar />
    <Details hidePlayButton={false} />
    <Episodes />
  </Container>
);
export default Screen;
