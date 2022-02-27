import React from 'react';
import GlobalStyle from './styles/global';
import { fonts } from './styles/theme';
import GoogleFontLoader from 'react-google-font-loader';
import 'antd/dist/antd.css';
import Screen from './screens/Details';

const App: React.FC = () => (
  <>
    <GoogleFontLoader fonts={fonts} />
    <GlobalStyle />
    <Screen />
  </>
);
export default App;
