import * as React from 'react';
import { observer } from 'mobx-react';
import * as moment from 'moment';

import { formatDuration } from '../lib/format-duration';

const Entry = observer(({start, end, duration}: {start: Date, end: Date, duration: number}) => (
  <div>
    {moment(start).format('HH:mm')} - {(end) ? (moment(end).format('HH:mm')) : null} - {formatDuration(duration)}
  </div>
));

export default Entry;
