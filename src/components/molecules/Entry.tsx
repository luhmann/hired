import * as React from 'react'
import { observer } from 'mobx-react'
import * as moment from 'moment'
import styled from 'styled-components'

import { formatCurrency } from '../../lib/format-currency'
import { formatDuration } from '../../lib/format-duration'
import { cells, color, fontSizes } from '../../styles/style-utils'

import { Row } from '../atoms/Containers'
import { Total as GlobalTotal } from '../atoms/Text'

const Root = styled.div`
  font-size: ${fontSizes.standard};
  display: grid;
  grid-template-columns: repeat(6, [col] 1fr);
  grid-column-gap: ${cells(1)}M
  grid-row-gap: 3px;
  height: ${cells(2)};
`

const Day = styled.div`
  grid-column: col / span 5;
`

const Total = styled(GlobalTotal)`
`

interface TimeProps {
  begin?: Boolean
  end?: Boolean
}

const Time = styled.div`
  ${ (props: TimeProps) => props.begin ? `color: ${color.charcoral};` : ''}
  ${ (props: TimeProps) => props.end ? `color: ${color.deepChestnut};` : ''}
`

const Duration = styled.div`
  color: ${color.charcoral};
  grid-column: col 3 / span 4;
  text-align: right;
`

interface EntryProps {
  className?: string
  start: Date
  end: Date
  duration: number
  total: number
}

const Entry = observer(({start, end, duration, total}: EntryProps) => (
    <Row contentCells={4}>
      <Root>
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
      </Root>
    </Row>
))

export default Entry
