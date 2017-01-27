import * as React from 'react'
import styled from 'styled-components'

import { Loading } from './atoms/'
import { center } from '../styles/style-utils'

const Root = styled.div`
  ${ center() }
  height: 100vh;
  width: 100vw;
`

const Bootstrap = () => (
  <Root>
    <Loading />
  </Root>
)

export default Bootstrap
