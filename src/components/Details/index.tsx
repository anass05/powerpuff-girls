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
  title?: string;
  description?: string;
  genres?: [string];
};

const Details: React.FC<Props> = ({
  hidePlayButton,
  title,
  description,
  genres,
}) => (
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
          <Title>{title}</Title>
          <Description dangerouslySetInnerHTML={{ __html: description }} />
          {genres && (
            <ExtraDetails>
              <b>
                <u>Genres:</u>
              </b>
              {genres.map((_) => ` ${_}`)}
            </ExtraDetails>
          )}
        </Content>
      </Col>
    </Row>
  </DetailsContainer>
);

export default Details;
