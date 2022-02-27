import React, { useState } from 'react';
import { EpisodesContainer, Title } from './styles';
import { Col, Row } from 'antd';
import Carousel from 'react-simply-carousel';
import Episode from '../Episode';

const Details: React.FC = () => {
  const [active, setActive] = useState(0);
  return (
    <EpisodesContainer>
      <Row>
        <Col xl={{ span: 22, offset: 1 }}>
          <Title>Episodes</Title>
        </Col>
      </Row>
      <Row>
        <Col xl={{ span: 22, offset: 1 }}>
          <Carousel
            itemsToShow={6}
            activeSlideIndex={active}
            onRequestChange={setActive}
            backwardBtnProps={{ show: false }}
            forwardBtnProps={{ show: false }}
          >
            {[0, 1, 2, 3, 4, 5, 6].map((el) => (
              <Episode key={`${el}`} value={`${el}`} />
            ))}
          </Carousel>
        </Col>
      </Row>
    </EpisodesContainer>
  );
};

export default Details;
