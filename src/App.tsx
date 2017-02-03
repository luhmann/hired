import * as React from 'react'
import DevTools from 'mobx-react-devtools'
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'
import { observer, inject } from 'mobx-react'

import './styles/reset.ts'
import { UiStore } from './stores/uiStore'
import { Fb } from './storage/firebase'
import Bootstrap from './components/Bootstrap.component'
import Project from './components/Project.component'

interface AppProps {
  uiStore?: UiStore
}

@inject('uiStore')
@observer
class App extends React.Component<AppProps, {}> {
  authPromise: IPromiseBasedObservable<void>

  componentWillMount() {
    if (this.props.uiStore) {
      this.authPromise = fromPromise(this.props.uiStore.authenticate())
    }

  }

  render() {
    return (
      <div>
        {
          this.authPromise.case({
            pending: () => <Bootstrap />,
            rejected: (error: Object) => <div>Something went horribly wrong</div>,
            fulfilled: () => {
              let storedEntries = fromPromise(Fb.currentProjectEntries().once('value'))
              return (<Project storedEntries={storedEntries} />)
            }
          })
        }
        <DevTools />
      </div>
     )
  }
}

export default App
