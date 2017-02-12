/// <reference path="customTypings.d.ts"/>

import RootStore from '../stores/rootStore'
import Router5, { RouterInterface, loggerPlugin } from 'router5'
import browserPlugin from 'router5/plugins/browser'
import listenersPlugin from 'router5/plugins/listeners'

const ROUTE_NAMES = {
  projectList: 'PROJECT_LIST',
  projectOverview: 'PROJECT_OVERVIEW'
}

const ROUTES = [
  { name: ROUTE_NAMES.projectList, path: '/' },
  { name: ROUTE_NAMES.projectOverview, path: '/project/:projectId' }
]

interface RouterStateInterface {
  meta: Object,
  name: string,
  params: {
    projectId: string
  },
  path: string
}

class Router {
  instance: RouterInterface
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore

    this.instance = Router5(
      ROUTES, {
        trailingSlash: false,
        useTrailingSlash: undefined,
        autoCleanUp: true,
        strictQueryParams: true,
        allowNotFound: true
      }
    )

    this.instance.usePlugin(browserPlugin({
      useHash: false
    }))
    this.instance.usePlugin(loggerPlugin)
    this.instance.usePlugin(listenersPlugin())

    this.instance.addListener((toState: RouterStateInterface, fromState: RouterStateInterface) => {
      this.rootStore.uiStore.setError(false)
      switch (toState.name) {
        case (ROUTE_NAMES.projectList):
          this.rootStore.uiStore.showProjectList()
          break
        case (ROUTE_NAMES.projectOverview):
          this.rootStore.uiStore.showProject(toState.params.projectId)
          break
        default:
          this.rootStore.uiStore.setError(true)
      }
    })

    this.instance.start()
  }
}

export { ROUTE_NAMES }
export default Router
