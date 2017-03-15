import * as React from 'react'
import styled, { keyframes } from 'styled-components'

import { color } from '../../styles/style-utils'

const a = keyframes`
  0% {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(1turn);
    }
`

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

  border: 1px solid ${color.cadetBlue};
  border-color: ${color.cadetBlue};
  color: ${color.cadetBlue};
`

const Spinner = styled.div`
  animation: ${a} .6s infinite linear;
  border: 2px solid #F79F79;
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
