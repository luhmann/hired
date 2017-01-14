import * as React from 'react';
import { observer } from 'mobx-react';

const Entry = observer(({start, end, duration}: {start: String, end: String, duration: Number}) => (
  <div>
    {start} - {end} - {duration}
  </div>
));

export default Entry;
