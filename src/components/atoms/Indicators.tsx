import * as React from 'react'
import styled from 'styled-components'

import { cells, color } from '../../styles/style-utils'
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

const ProgressRoot = styled.div`
  background-color: ${color.green.g_100};
  height: ${cells(0.5)};
`

const ProgressFill = styled.div`
  background-color: ${color.green.g_500};
  height: ${cells(0.5)}
`

export const ProgressBar = ({ className, finished }: { className?: string, finished: number }) => (
  <div className={className}>
    <ProgressRoot>
      <ProgressFill style={{width: `${finished}%`}}>&nbsp;</ProgressFill>
    </ProgressRoot>
  </div>
)
