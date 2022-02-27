import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const EpisodeContainer = styled.div`
  width: 300px;
  height: 166px;
  margin-right: 16px;
  margin-bottom: 44px;
  position: relative;
`;

export const Clickable = styled.div`
  width: 300px;
  height: 166px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
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
`;
