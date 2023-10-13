import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  button{
    cursor: pointer;
    background: transparent;
    border: none;
  }
  ul,ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li{
    list-style: 0;
  }

  
`;
