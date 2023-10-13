import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
  body{
    background-color: black;
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


export const ColorsTheme={
  colors:{
    white: '#ffffff',
    white20: 'rgba(217,217,217,0.20)',
    red: '#f55859',
    blue:'#0f81ec',
  }
}