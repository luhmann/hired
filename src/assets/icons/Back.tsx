import * as React from 'react'
import styled from 'styled-components'

import { color, cells } from '../../styles/style-utils'

const Icon = ({className}: {className?: 'string'}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="21.530000686645508 -1.218999981880188 58.04701232910156 102.03800201416016"
    enableBackground="new 0 0 100 100"
  >
    <path
      fill="#000000"
      d="M21.53,50.809L71.688,0.651c0,0,2.685-1.87,5.285,0.73c2.604,2.601,0,4.877,0,4.877l-44.63,44.631  l42.517,42.516c0,0,2.211,2.666-0.164,5.039c-2.373,2.375-5.688,0-5.688,0L21.53,50.809z"
    />
  </svg>
)

const BackIcon = styled(Icon)`
  height: ${cells(3)};

  & path {
    fill: ${color.brilliantAzure};
  }
`

export default BackIcon
