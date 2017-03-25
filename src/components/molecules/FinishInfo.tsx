import * as React from 'react'
import styled from 'styled-components'

import { addHours, formatTime } from '../../lib/dateTime'

import { color } from '../../styles/style-utils'
import { flip } from '../../styles/globals'

const Root = styled.div`
  animation: ${flip} 5s ease-in-out 2s infinite alternate both;
  position: relative;
  transform-style: preserve-3d;
`

const Start = styled.div`
  background-color: ${color.gray.g_50};
  backface-visibility: hidden;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 20;
`

const Finish = styled.div`
  background-color: ${color.gray.g_50};
  backface-visibility: hidden;
  left: 0;
  position: absolute;
  top: 0;
  transform: rotateX(180deg);
  z-index: 10;
`

export interface FinishInfoProps {
  className?: string
  startTime: Date
  workHours: number
}

const FinishInfo = ({className, startTime, workHours}: FinishInfoProps) => {
  return (
    <Root className={className}>
      <Start>started at {formatTime(startTime)}</Start>
      <Finish>done at {formatTime(addHours(startTime, workHours))}</Finish>
    </Root>
  )
}

export default FinishInfo
