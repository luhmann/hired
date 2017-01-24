import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';

import App from './App';

useStrict(true);

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
