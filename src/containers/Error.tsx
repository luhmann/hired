import * as React from 'react'
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled from 'styled-components'

import { cells, center, color } from '../styles/style-utils'
import SkullIcon from '../assets/icons/Skull'

const Root = styled.div`
  ${ center()}
  background-color: ${color.red.g_900}
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

const Icon = styled(SkullIcon)`
  height: 60px;
  margin-bottom: ${cells(2)};
  width: 60px;

  path {
    fill: ${color.white};
  }
`

const Text = styled.div`
  color: ${color.white};
  text-align: center;
`

const Error = () => (
  <ReactCSSTransitionGroup
    transitionName="entry"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
    transitionAppear={true}
    transitionAppearTimeout={500}
  >
  <Root>
    <Icon />
    <Text>
      Something went terribly wrong.<br />We are very sorry for the inconvenience.<br/>
      Talented people are already working on it
    </Text>
  </Root>
  </ReactCSSTransitionGroup>
)

export default Error
