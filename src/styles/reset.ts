import { injectGlobal } from 'styled-components'

injectGlobal`
* {
    box-sizing: border-box;
    text-rendering: geometricPrecision;
  }

  html {
    font-size: 12px;
    font-style: normal;
    font-family: Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,
      Courier New,monospace,serif;
  }

  body {
    margin: 0;
    padding: 0;
  }

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }
`
