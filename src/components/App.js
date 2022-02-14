import React, { useState } from "react"

import { ThemeProvider, ThemeContext } from "./ThemeProvider"
import GlobalStyles from "./GlobalStyles"
import { space, primary, spooky, tufte } from "../theme"

const themeMap = {
  space: space,
  primary: primary,
  spooky: spooky,
  tufte: tufte,
}

function App({ children }) {
  const [theme, setTheme] = useState("primary")
  return (
    <ThemeProvider theme={themeMap[theme]}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default App
