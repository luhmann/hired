import * as React from 'react'
// import DevTools from 'mobx-react-devtools'
import { observer, inject } from 'mobx-react'

import '../styles/globals.ts'
import RootStore from '../stores/rootStore'
import { ROUTE_NAMES } from '../stores/routerStore'

import { Bootstrap, Error } from '../components/organisms/'
import ProjectList from './ProjectList'
import Project from './Project'
import ProjectNew from './ProjectNew'

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
          return (
            <ProjectList
              projects={this.props.rootStore.projectListStore.projects}
              rootStore={this.props.rootStore}
            />
          )
        case (ROUTE_NAMES.projectOverview):
          if (this.props.rootStore.uiStore.currentView.projectId) {
            return <Project id={this.props.rootStore.uiStore.currentView.projectId} />
          }
          break
        case (ROUTE_NAMES.projectNew):
          return <ProjectNew />
        default:
          break
      }
    }

    // NOTE: default in all remaining cases
    return <Error />
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
