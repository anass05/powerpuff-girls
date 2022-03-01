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
      <Col
        xl={{ span: 5, offset: 1 }}
        md={{ span: 9, offset: 1 }}
        xs={{ span: 0 }}
      >
        {!hidePlayButton && (
          <PlayContent>
            <PlayImage src={PlayButton} alt="" />
          </PlayContent>
        )}
      </Col>
      <Col
        xl={{ span: 10, offset: 6 }}
        md={{ span: 13, offset: 0 }}
        xs={{ span: 22, offset: 1 }}
      >
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
