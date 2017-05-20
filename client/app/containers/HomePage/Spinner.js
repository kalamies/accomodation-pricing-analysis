import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 2rem;
  width: 100%;
  color: #ddd;
`

const Spinner = () => (
  <Wrapper>
    Loading...
  </Wrapper>
)

export default Spinner
