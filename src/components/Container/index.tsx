import React, { ReactNode } from 'react';
import { Background, ScreenContainer } from './styles';
import { URLS } from '../../constants';

type Props = {
  children: ReactNode;
};

const Container: React.FC<Props> = ({ children }) => (
  <>
    <Background src={URLS.cover} />
    <ScreenContainer>{children}</ScreenContainer>
  </>
);

export default Container;
