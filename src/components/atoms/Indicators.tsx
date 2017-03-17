import * as React from 'react'
import styled from 'styled-components'

import { color } from '../../styles/style-utils'
import { rotate } from '../../styles/globals'

const Root = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  padding: .65rem 2rem;
  font-size: 1rem;
  user-select: none;
  position: relative;
  z-index: 1;

  border: 1px solid ${color.blue};
  border-color: ${color.blue};
  color: ${color.blue};
`

const Spinner = styled.div`
  animation: ${rotate} .6s infinite linear;
  border: 2px solid ${color.red.g_500};
  border-right-color: transparent;
  border-radius: 50%;
  display: inline-block;
  float: left;
  margin-right: .5rem;
  width: 14px;
  height: 14px;
`

export const Loading = () => (
  <Root>
    <Spinner /> Loading…
  </Root>
)
