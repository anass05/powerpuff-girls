import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const DetailsContainer = styled.div`
  width: 100vw;
  display: flex;
  flex: 1;
  flex-direction: column;
  .ant-row {
    height: 100%;
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 96px;
  color: ${theme.colors.white};
  margin-bottom: 24px;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  color: ${theme.colors.white};
  margin-bottom: 32px;
`;

export const ExtraDetails = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.white};
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PlayContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

export const PlayImage = styled.img`
  width: 144px;
  height: 144px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    width: 150px;
    height: 150px;
    margin-left: -3px;
    margin-bottom: -3px;
  }
`;
