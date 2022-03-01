import styled from 'styled-components';
import { theme } from 'styles/theme';

export const EpisodesContainer = styled.div`
  width: 100vw;
  margin-top: 80px;
  @media (max-width: 768px) {
    margin-top: 52px;
  }
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 80px;
  color: ${theme.colors.white};
`;
