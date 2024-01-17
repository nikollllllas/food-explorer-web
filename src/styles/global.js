import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  img,picture,svg,video {
    display: block;
    max-width: 100%;
  }

  body,input,button,textarea {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-height: 100vh;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }
  
  button:hover, a:hover {
    filter: brightness(.9);
  }
`
