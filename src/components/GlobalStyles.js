import React from "react"

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    /* font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif; */
    font-family: ${p => p.theme.text.default.fontFamily};
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
  }

  a {
    color: var(--color-secondary);
  }
  @font-face {
    font-family: "et-book";
    src: url("/fonts/et-book-roman-old-style-figures.woff") format('woff');
  }
  
`

export default GlobalStyles
