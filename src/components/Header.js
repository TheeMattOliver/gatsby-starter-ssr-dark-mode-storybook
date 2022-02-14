import React from "react"
import styled from "styled-components"

import { ThemeContext } from "./ThemeProvider"
import { useTheme } from "../components/ThemeProvider"

import DarkToggle from "./DarkToggle"
import ThemeToggle from "./ThemeToggle"

const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      <Title>{siteTitle}</Title>
      <ThemeToggle />
      <DarkToggle />
    </Wrapper>
  )
}

const Title = styled.span`
  margin-right: auto;
`

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 4px solid ${p => p.theme.border};
`

export default Header
