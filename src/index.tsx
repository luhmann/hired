import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import { RouterProvider } from 'react-router5'

import { FirebaseRepository } from './storage/'
import { RootStore } from './stores/'
import Router from './lib/router'

import App from './containers/App'

useStrict(true)

const repository = new FirebaseRepository()
const rootStore = new RootStore(repository, 'me')
const router = new Router(rootStore)

const rootEl = document.getElementById('root') as HTMLElement

ReactDOM.render(
  <Provider rootStore={rootStore} router={router}>
    <RouterProvider router={router.instance}>
      <App />
    </RouterProvider>
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
