import React from 'react';
import { EpisodesContainer, Title } from './styles';
import { Col, Row } from 'antd';
import Episode from '../Episode';
import BearCarousel from 'bear-react-carousel';

type Props = {
  episodes: Array<{
    id: string;
    number: number;
    season: number;
    name: string;
    summary: string;
    image: Record<any, any>;
  }>;
  onEpisodeClick: (name: string, summary: string, image: string) => void;
};
const Details: React.FC<Props> = ({ episodes, onEpisodeClick }) => {
  return (
    <EpisodesContainer>
      <Row>
        <Col xl={{ span: 22, offset: 1 }}>
          <Title>Episodes</Title>
        </Col>
      </Row>
      <Row>
        <Col xl={{ span: 22, offset: 1 }}>
          <BearCarousel
            isEnableMouseMove={false}
            isEnableNavButton={true}
            data={episodes.map(
              ({ id, number, summary, season, name, image }) => ({
                key: id,
                children: (
                  <Episode
                    key={`${id}`}
                    episode={`${number}`}
                    season={`${season}`}
                    thumbnail={image?.medium}
                    onClick={() =>
                      onEpisodeClick(name, summary, image?.original)
                    }
                  />
                ),
              }),
            )}
            slidesPerView="auto"
            staticHeight="166px"
          />
        </Col>
      </Row>
    </EpisodesContainer>
  );
};

export default Details;
