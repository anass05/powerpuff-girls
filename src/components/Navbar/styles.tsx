import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const NavbarContainer = styled.div`
  min-height: 100px;
  max-height: 100px;
  position: relative;
  @media (max-width: 256px) {
    min-height: 40px;
    max-height: 40px;
  }
  @media (max-width: 1200px) {
    min-height: 80px;
    max-height: 80px;
  }
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  color: ${theme.colors.white};
`;

export const NavbarContent = styled.div`
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100vw;
`;

export const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 24px;
`;

export const BackButton = styled.img`
  height: 40px;
  margin-right: 8px;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const Account = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-left: 16px;
  color: ${theme.colors.white};
`;
