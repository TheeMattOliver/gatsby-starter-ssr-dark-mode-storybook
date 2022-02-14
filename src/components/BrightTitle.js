import styled from "styled-components"

export default styled.h1`
  color: var(--color-primary);
  font-family: ${p => p.theme.text.header.fontFamily};
  font-style: ${p => (p.theme === "tufte" ? "italic" : "")};
  font-size: 64px;
  font-weight: bold;
`
