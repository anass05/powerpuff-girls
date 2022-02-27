import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(270deg, ${theme.colors.dark} -2.92%, ${theme.colors.invisible_dark} 100%);
  display: flex;
  flex-direction: column;
`;
export const Background = styled.img`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.image_placeholder};
`;
