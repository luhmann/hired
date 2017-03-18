import * as React from 'react'
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled from 'styled-components'

import { center, color } from '../styles/style-utils'
import { Loading } from '../components/atoms/Indicators'

const Root = styled.div`
  ${ center() }
  background-color: ${color.gray.g_900}
  height: 100vh;
  width: 100vw;
`

const Bootstrap = () => (
  <ReactCSSTransitionGroup
    transitionName="entry"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
    transitionAppear={true}
    transitionAppearTimeout={500}
  >
    <Root>
      <Loading />
    </Root>
  </ReactCSSTransitionGroup>
)

export default Bootstrap
