import { createGlobalStyle } from 'styled-components';

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
    background-color: #525252;
    opacity: .6;
    border-radius: 15px;
  }
  
`;
