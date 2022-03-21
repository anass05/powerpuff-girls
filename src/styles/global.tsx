import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export default createGlobalStyle`
  * {  
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "DM Sans",serif !important;
  }
  #root {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "DM Sans",serif !important;
  }
  .bear-react-carousel__nav-icon{
    background-color: ${theme.colors.dark};
    opacity: .9;
    border-radius: 15px;
  }
  ::-webkit-scrollbar {
    width: 10px !important;
    height: 10px !important;
  }
  ::-webkit-scrollbar-track {
    background: #cccccc22;
  } 
  ::-webkit-scrollbar-thumb {
    background-color: #ccccccaa;
    border-radius: 20px;
  }
  .pad-small {
    @media (max-width: 768px) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
`;
