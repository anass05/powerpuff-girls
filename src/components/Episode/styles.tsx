import styled from 'styled-components';
import { theme } from 'styles/theme';

export const EpisodeContainer = styled.div`
  max-width: 300px;
  max-height: 166px;
  margin-right: 16px;
  margin-bottom: 44px;
  position: relative;
  &:hover span {
    transform: scale(1.06);
    right: 6px;
  }
`;

export const Thumbnail = styled.img`
  width: 300px;
  height: 146px;
  margin-right: 16px;
  background-color: ${theme.colors.dark_grey};
  margin-bottom: 44px;
  position: relative;
  border-width: 0;
  border-radius: 4px;
`;

export const EpisodeNumber = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  color: ${theme.colors.white};
  position: absolute;
  bottom: 0;
  right: 14px;
  transition: 0.2s;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.75);
`;
