import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import { useTheme } from "../components/ThemeProvider"
import BrightTitle from "../components/BrightTitle"
import { FancyEmoji } from "../components/FancyEmoji"

const IndexPage = () => {
  const { theme } = useTheme()
  return (
    <Layout>
      <BrightTitle>
        Hello nested theming
        <FancyEmoji emoji={theme.emoji} />
      </BrightTitle>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
