import React from 'react'
import styled from 'styled-components'

export const CenteredLayout = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /*centers items on the line (the x-axis by default)*/
  align-items: center; /*centers items on the cross-axis (y by default)*/
`

export default CenteredLayout
