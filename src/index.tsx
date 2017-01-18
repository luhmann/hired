import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';

import App from './App';
import 'hack/dist/hack.css';
import 'hack/dist/solarized-dark.css'
import './index.css';

useStrict(true);

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
