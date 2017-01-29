import * as React from 'react'
import { observer } from 'mobx-react'
import * as moment from 'moment'
import styled from 'styled-components'
import * as numeral from 'numeral'
import 'numeral/locales/de'
numeral.locale('de')

import { formatDuration } from '../lib/format-duration'
import { gridCell, color } from '../styles/style-utils'

const Row = styled.div`
  border-top: 1px solid #f3f3f3;
  padding: 6px 0;
`

const Root = styled.div`
  display: flex;
  margin-bottom: 3px;
`

const Day = styled.div`
  ${ gridCell(8) }
`

const Total = styled.div`
  ${ gridCell(4) }
  color: ${color('lightGreen')}
  text-align: right;
`

interface TimeProps {
  begin?: Boolean
  end?: Boolean
}

const Time = styled.div`
  ${ gridCell(2) }
  ${ (props: TimeProps) => props.begin ? `color: ${color('darkBlue')};` : ''}
  ${ (props: TimeProps) => props.end ? `color: ${color('red')};` : ''}
`

const Duration = styled.div`
  ${ gridCell(8) }
  color: ${color('darkBlue')};
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
    <Row>
        <Root>
            <Day>
                {moment(start).format('dd. DD. MMMM YYYY')}
            </Day>
            <Total>{numeral(total).format('$0,0.00')}</Total>
        </Root>
        <Root>
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
