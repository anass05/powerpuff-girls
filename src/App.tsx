import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={theme} />
    <GlobalStyle />
  </>
);
export default App;
