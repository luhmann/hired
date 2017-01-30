import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'

import uiStore from './stores/uiStore'
import projectStore from './stores/projectStore'

import App from './App'

useStrict(true)

const stores = { uiStore, projectStore }
const rootEl = document.getElementById('root') as HTMLElement

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  rootEl
)

// declare var module: { hot: any };
// if (module.hot) {
//   module.hot.accept('./App', () => {
//     const NextApp = require('./App').default
//     ReactDOM.render(
//       <NextApp />,
//       rootEl
//     )
//   })
// }
