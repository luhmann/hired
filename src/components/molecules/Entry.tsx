import * as React from 'react'
import { observer } from 'mobx-react'
import * as moment from 'moment'
import styled from 'styled-components'

import { formatCurrency } from '../../lib/format-currency'
import { formatDuration } from '../../lib/format-duration'
import { cells, color, fontSizes } from '../../styles/style-utils'

import { Row } from '../atoms/Containers'
import { Total as GlobalTotal } from '../atoms/Text'

const Root = styled.div``

const Container = styled.div`
  font-size: ${fontSizes.standard};
  display: grid;
  grid-template-columns: repeat(6, [col] 1fr);
  grid-column-gap: ${cells(1)};
  grid-row-gap: 3px;
  height: ${cells(2)};
`

const Day = styled.div`
  grid-column: col / span 4;
`

const Total = styled(GlobalTotal) `
  grid-column: col 5 / span 2;
`

interface TimeProps {
  begin?: Boolean
  end?: Boolean
}

const Time = styled.div`
  ${ (props: TimeProps) => props.begin ? `color: ${color.indigo};` : ''}
  ${ (props: TimeProps) => props.end ? `color: ${color.red.g_900};` : ''}
`

const Duration = styled.div`
  color: ${color.indigo};
  grid-column: col 3 / span 4;
  text-align: right;
`

interface EntryProps {
  className?: string
  start: Date
  end: Date
  duration: number
  running: boolean
  total: number
}

const Entry = observer(({ start, end, duration, total, running }: EntryProps) => (
  <Root>
    <Row contentCells={4}>
      <Container>
        <Day>
          {moment(start).format('dd. DD. MMMM YYYY')}
        </Day>
        <Total>{formatCurrency(total)}</Total>
        <Time begin>
          {moment(start).format('HH:mm')}
        </Time>
        <Time end>
          {(end) ? (moment(end).format('HH:mm')) : null}
        </Time>
        <Duration>
          {formatDuration(duration)}
        </Duration>
      </Container>
    </Row>
  </Root>
))

export default Entry
