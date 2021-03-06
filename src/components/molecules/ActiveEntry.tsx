import * as React from 'react'
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { formatCurrency } from '../../lib/currency'
import { formatDuration, getPercent } from '../../lib/dateTime'

import { cells, color } from '../../styles/style-utils'
import { Row } from '../atoms/Containers'
import { Root as EntryRoot, Container, Total } from './Entry'
import { Duration as GlobalDuration } from '../atoms/Text'
import FinishInfo from './FinishInfo'
import { ProgressBar } from '../atoms/Indicators'

const Root = styled(EntryRoot)`
  border-top: 1px solid ${color.gray.g_300};
  background-color: ${color.gray.g_50};
  border-bottom: 1px solid ${color.gray.g_300};
  height: ${cells(6)}
`

const StyledFinishInfo = styled(FinishInfo)`
  grid-column: col / span 4;
`

const StyledProgressBar = styled(ProgressBar)`
  grid-column: col / span 4;
  height: ${cells(2)};
  overflow: hidden;
  padding: 6px 0;
`

const Duration = styled(GlobalDuration)`
  grid-column: col 5 / span 2;
`

export interface ActiveEntryProps {
  className?: string
  start: Date
  duration: number
  standardHours: number
  total: number
}

const ActiveEntry = observer(({ start, duration, standardHours, total }: ActiveEntryProps) => (
  <ReactCSSTransitionGroup
    transitionName="entry"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
    transitionAppear={true}
    transitionAppearTimeout={500}
  >
    <Root key="activeEntry" data-t-target="ActiveEntry">
      <Row contentCells={4}>
        <Container>
          <StyledFinishInfo startTime={start} workHours={standardHours} />
          <Total>{formatCurrency(total)}</Total>
          <StyledProgressBar finished={getPercent(duration, standardHours)} />
          <Duration>
            {formatDuration(duration)}
          </Duration>
        </Container>
      </Row>
    </Root>
  </ReactCSSTransitionGroup>
))

export default ActiveEntry
