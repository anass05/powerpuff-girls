import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: hidden;
  background: linear-gradient(
    270deg,
    ${theme.colors.dark} 35%,
    ${theme.colors.invisible_dark} 100%
  );
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 100%;
    margin: auto;
    background: linear-gradient(
      180deg,
      ${theme.colors.dark} 15%,
      ${theme.colors.invisible_dark} 100%
    );
  }
  @media (max-width: 576px) {
  }
`;

export const Background = styled.img`
  width: 66%;
  height: 100vh;
  background-color: ${theme.colors.image_placeholder};
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
    position: fixed;
  }
`;
