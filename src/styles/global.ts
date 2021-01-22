import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f3f3f3;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5 ,h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
