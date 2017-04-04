import * as React from 'react'
import * as ReactDOM from 'react-dom'

import FirebaseRepository from '../storage/firebaseRepository'
import RootStore from '../stores/rootStore'
import App from './App'

// FIXME: Test is not done yet
xit('renders without crashing', async () => {
  const repository = new FirebaseRepository()
  const store = await new RootStore(repository, 'me')
  const div = document.createElement('div')
  ReactDOM.render(<App rootStore={store} />, div)
})
