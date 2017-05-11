import * as React from 'react'
import * as CSSTransitionGroup from 'react-transition-group'
import styled from 'styled-components'

import { center, color } from '../../styles/style-utils'
import { Loading } from '../atoms/Indicators'

const Root = styled.div`
  ${ center() }
  background-color: ${color.gray.g_900}
  height: 100vh;
  width: 100vw;
`

const Bootstrap = () => (
  <CSSTransitionGroup
    transitionName="entry"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
    transitionAppear={true}
    transitionAppearTimeout={500}
  >
    <Root>
      <Loading />
    </Root>
  </CSSTransitionGroup>
)

export default Bootstrap
