import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html{ 
    height: 98vh;
    font-size: 24px; 
  }
  body{ 
    max-width: 1024px;
    min-height: 100vh;
  }
  @media only screen and (max-width: 734px){
    html{
      
    }
    body{
      
    }
  }
  @media only screen and (max-width: 540px){
    html{
      font-size: 16px
      
    }
    body{
      max-width: 736px;
    }
  }
  html {
    box-sizing: border-box;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    flex: 1;
    overscroll-behavior: none;
    width: 100%;
    font-size: 42px;
    text-rendering: optimizeLegibility;
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
  }
`