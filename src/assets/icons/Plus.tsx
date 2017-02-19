import * as React from 'react'
import styled from 'styled-components'

import { color } from '../../styles/style-utils'

const Icon = ({className}: {className?: 'string'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="12 12 26 26" className={className}>
    <path d="M24 38V26H12v-2h12V12h2v12h12v2H26v12h-2z" overflow="visible" color="#000" />
  </svg>
)

const PlusIcon = styled(Icon)`
  height: 100%;
  padding: 12px;
  width: 40px;

  & path {
    fill: ${color.brilliantAzure};
  }
`

export default PlusIcon
