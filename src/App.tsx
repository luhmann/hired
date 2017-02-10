import * as React from 'react'
import DevTools from 'mobx-react-devtools'
import { observer, inject } from 'mobx-react'

import './styles/reset.ts'
import RootStore from './stores/rootStore'
import Bootstrap from './components/Bootstrap.component'
import ProjectList from './components/ProjectList.component'
import Project from './components/Project.component'

interface AppProps {
  rootStore?: RootStore
}

@inject('rootStore')
@observer
class App extends React.Component<AppProps, {}> {
  render() {
    if (!this.props.rootStore) {
      return null
    }

    if (!this.props.rootStore.uiStore.isLoaded) {
      return (<Bootstrap />)
    }

    if (this.props.rootStore.uiStore.hasError) {
      return (<div>Error error error</div>)
    }

    let renderTarget = null
    if (this.props.rootStore.projectStore.currentProject) {
      renderTarget = <Project />
    } else {
      renderTarget = <ProjectList projects={this.props.rootStore.projectStore.projects} />
    }

    return (
      <div>
        { renderTarget }
        <DevTools />
      </div>
    )
  }
}

export default App
