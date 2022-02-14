import React from "react"
import { ThemeProvider } from "../components/ThemeProvider"
import GlobalStyles from "../components/GlobalStyles"
import TestComponent from "../components/TestComponent"

export default {
  title: "Components/TestComponent",
  component: TestComponent,
  decorators: [
    Story => {
      return (
        <ThemeProvider>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      )
    },
  ],
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
  },
}

export const testComponent = args => {
  return <TestComponent {...args}>Hello world</TestComponent>
}
