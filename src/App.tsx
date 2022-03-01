import React from 'react';
import GlobalStyle from 'styles/global';
import { fonts } from 'styles/theme';
import GoogleFontLoader from 'react-google-font-loader';
import 'antd/dist/antd.css';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { configureStore } from 'redux/stores/configureStore';
import 'bear-react-carousel/dist/index.css';

const store = configureStore();
const App: React.FC = () => (
  <Provider store={store}>
    <GoogleFontLoader fonts={fonts} />
    <GlobalStyle />
    <Routes />
  </Provider>
);
export default App;
