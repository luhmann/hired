import * as React from 'react';
import { observer } from 'mobx-react';
import * as moment from 'moment';
// import renderIf from 'render-if';

const Entry = observer(({start, end, duration}: {start: Date, end: Date, duration: Number}) => (
  <div>
    {moment(start).format('HH:mm')} - {(end) ? (moment(end).format('HH:mm')) : ''} - {duration}
  </div>
));

export default Entry;
