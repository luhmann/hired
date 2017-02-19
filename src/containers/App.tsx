import * as React from 'react'
// import DevTools from 'mobx-react-devtools'
import { observer, inject } from 'mobx-react'

import '../styles/reset.ts'
import RootStore from '../stores/rootStore'
import { ROUTE_NAMES } from '../lib/router'

import Bootstrap from '../components/Bootstrap.component'
import Error from '../components/Error'
import ProjectList from '../components/ProjectList.component'
import Project from '../containers/Project'
import ProjectNew from '../containers/ProjectNew'

interface AppProps {
  rootStore?: RootStore
}

@inject('rootStore')
@observer
class App extends React.Component<AppProps, {}> {
  renderCurrentView() {
    if (this.props.rootStore) {
      switch (this.props.rootStore.uiStore.currentView.name) {
        case (ROUTE_NAMES.projectList):
          return <ProjectList
            projects={this.props.rootStore.projectListStore.projects}
            rootStore={this.props.rootStore}
          />
        case (ROUTE_NAMES.projectOverview):
          return <Project />
        case (ROUTE_NAMES.projectNew):
          return <ProjectNew />
        default:
          return <Error />
      }
    } else {
      return <Error />
    }

  }

  render() {
    if (!this.props.rootStore) {
      return null
    }

    if (!this.props.rootStore.uiStore.isLoaded) {
      return (<Bootstrap />)
    }

    if (this.props.rootStore.uiStore.hasError) {
      return (<Error />)
    }

    return (
      <div>
        {this.renderCurrentView()}
        {/*<DevTools />*/}
      </div>
    )
  }
}

export default App
