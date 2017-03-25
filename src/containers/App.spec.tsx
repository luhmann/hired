import * as React from 'react'
import * as ReactDOM from 'react-dom'

import repositoryMock from '../test/mocks/mockFirebaseRepository'

import RootStore from '../stores/rootStore'
import App from './App'

xit('renders without crashing', async () => {
  const store = await new RootStore(repositoryMock, 'me')
  console.log(store)
  const div = document.createElement('div')
  ReactDOM.render(<App rootStore={store} />, div)
})
