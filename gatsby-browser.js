import "@fontsource/creepster"
import "@fontsource/vt323"
import React from "react"

import App from "./src/components/App"

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}
