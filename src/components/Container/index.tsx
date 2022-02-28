import React, { ReactNode } from 'react';
import { Background, ScreenContainer } from './styles';

type Props = {
  children: ReactNode;
  background?: string;
};

const Container: React.FC<Props> = ({ children, background }) => (
  <>
    <Background src={background || ''} />
    <ScreenContainer>{children}</ScreenContainer>
  </>
);

export default Container;
