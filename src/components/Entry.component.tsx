/// <reference path="types.d.ts"/>
import * as React from 'react';
import { observer } from 'mobx-react';
import * as moment from 'moment';
import styled from 'styled-components';

import { formatDuration } from '../lib/format-duration';
import { gridCell, color } from '../styles/style-utils'

const Row = styled.div`
  border-top: 1px solid #f3f3f3;
  padding: 6px 0;
`;

const Root = styled.div`
  display: flex;
`

const Day = styled.div`
  ${ gridCell(8) }
`

const Total = styled.div`
  ${ gridCell(4) }
`

const Time = styled.div`
  ${ gridCell(2) }
  ${ (props:any) => props.start ? `color: ${color('darkBlue')}` : ''}
  ${ (props:any) => props.end ? `color: ${color('red')}` : ''}
`

const Duration = styled.div`
  ${ gridCell(8) }
  color: ${color('darkBlue')};
  text-align: right;
`

const Entry = observer(({start, end, duration}: { start: Date, end: Date, duration: number }) => (
    <Row>
        <Root>
            <Day>
                {moment(start).format('dd. DD. MMMM YYYY')}
            </Day>
            <Total>{/* total will live here*/}</Total>
        </Root>
        <Root>
          <Time start>
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
));

export default Entry;
