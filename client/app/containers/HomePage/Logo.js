import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 4rem;

  & > h3 {
    margin: 0;
  }
`

const Logo = () => (
  <Wrapper>
    <h3>Housing analysis</h3>
  </Wrapper>
)

export default Logo
