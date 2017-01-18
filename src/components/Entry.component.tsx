import * as React from 'react';
import { observer } from 'mobx-react';
import * as moment from 'moment';

const Entry = observer(({start, end, duration}: {start: Date, end: Date, duration: number}) => (
  <div>
    {moment(start).format('HH:mm')} - {(end) ? (moment(end).format('HH:mm')) : null} - { new Date(duration * 1000).toISOString().substr(11, 8) }
  </div>
));

export default Entry;
