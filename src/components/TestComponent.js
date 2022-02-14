import React from "react"
import styled from "styled-components"

const TestComponent = props => {
  console.log("TestComponent props: ", props)
  return (
    <Wrapper {...props}>
      <h1>testing</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-family: ${p => p.theme.text.default};
  border: 2px dashed red;
  padding: 16px 32px;
  width: fit-content;
  color: red;
`
export default TestComponent
