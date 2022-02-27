import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const NavbarContainer = styled.div`
  height: 100px;
  position: relative;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  color: ${theme.colors.white};
`;

export const Item = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.white};
  border-bottom: solid 3px ${theme.colors.yellow};
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

export const Account = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-left: 16px;
  color: ${theme.colors.white};
`;
