import React from 'react';
import { Col, Row } from 'antd';
import {
  Content,
  Description,
  DetailsContainer,
  ExtraDetails,
  PlayContent,
  Title,
  PlayImage,
} from './styles';
import PlayButton from '../../assets/images/play.svg';

type Props = {
  hidePlayButton: boolean;
};

const Details: React.FC<Props> = ({ hidePlayButton }) => (
  <DetailsContainer>
    <Row>
      <Col xl={{ span: 5, offset: 1 }}>
        {!hidePlayButton && (
          <PlayContent>
            <PlayImage src={PlayButton} alt="" />
          </PlayContent>
        )}
      </Col>
      <Col xl={{ span: 8, offset: 8 }}>
        <Content>
          <Title>Lorem ipsum dolor</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            deleniti dolorem esse facilis obcaecati quibusdam ratione rerum
            ullam unde ut.
          </Description>
          <ExtraDetails>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, reiciendis.
          </ExtraDetails>
        </Content>
      </Col>
    </Row>
  </DetailsContainer>
);

export default Details;
