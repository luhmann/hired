import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import { RouterProvider } from 'react-router5'

import { FirebaseRepository, StorageAdapter, LocalStorageRepository } from './storage/'
import { RootStore } from './stores/'
import Router from './lib/router'

import App from './containers/App'

useStrict(true)

const repository = (process.env.REACT_APP_STORAGE_TYPE === 'localStorage')
  ? new LocalStorageRepository()
  : new FirebaseRepository()
const storageAdapter = new StorageAdapter(repository)
const rootStore = new RootStore(storageAdapter, 'me')
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
