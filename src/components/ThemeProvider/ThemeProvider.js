import React from "react"
import { ThemeProvider as SCThemeProvider } from "styled-components"

import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "../../constants"

import { space, primary, spooky, tufte } from "../../theme"

const themeMap = {
  space: space,
  primary: primary,
  spooky: spooky,
  tufte: tufte,
}

const defaultTheme = "primary"

export const ThemeContext = React.createContext({ setTheme: () => null })

const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = React.useState(props.theme)
  // Initialize state

  const [colorMode, rawSetColorMode] = React.useState(undefined)

  React.useEffect(() => {
    const root = window.document.documentElement

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    )

    rawSetColorMode(initialColorValue)
  }, [])

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue) {
      const root = window.document.documentElement

      localStorage.setItem(COLOR_MODE_KEY, newValue)

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`

        root.style.setProperty(cssVarName, colorByTheme[newValue])
      })

      rawSetColorMode(newValue)
    }

    return {
      theme,
      setTheme,
      colorMode,
      setColorMode,
    }
  }, [colorMode, theme, rawSetColorMode])

  // Update state if props change
  React.useEffect(() => {
    setTheme(props.theme)
  }, [props.theme])

  return (
    <ThemeContext.Provider value={contextValue}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return React.useContext(ThemeContext)
}

export default ThemeProvider
