import { injectGlobal } from 'styled-components'

injectGlobal`
* {
    box-sizing: border-box;
  }

  html {
    font-size: 12px;
    font-style: normal;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    text-rendering: optimizeLegibility;
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
