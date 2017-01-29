import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useStrict } from 'mobx'

import App from './App'

useStrict(true)

const rootEl = document.getElementById('root') as HTMLElement

ReactDOM.render(
  <App />,
  rootEl
)

declare var module: { hot: any };
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}
