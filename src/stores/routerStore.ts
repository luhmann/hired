/// <reference path="../lib/customTypings.d.ts"/>

import Router5, { RouterInterface, loggerPlugin } from 'router5'
import browserPlugin from 'router5/plugins/browser'
import listenersPlugin from 'router5/plugins/listeners'

import { isDev } from '../lib/env'
import { RootStore } from './'

const ROUTE_NAMES = {
  projectList: 'PROJECT_LIST',
  projectOverview: 'PROJECT_OVERVIEW',
  projectNew: 'PROJECT_NEW'
}

const ROUTES = [
  { name: ROUTE_NAMES.projectList, path: '/' },
  { name: ROUTE_NAMES.projectOverview, path: '/project/:projectId' },
  { name: ROUTE_NAMES.projectNew, path: '/project/new' },
]

interface RouterStateInterface {
  meta: Object,
  name: string,
  params: {
    projectId: string
  },
  path: string
}

class RouterStore {
  instance: RouterInterface

  private rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore

    this.instance = Router5(
      ROUTES, {
        trailingSlash: false,
        useTrailingSlash: undefined,
        autoCleanUp: true,
        strictQueryParams: false,
        allowNotFound: true
      }
    )

    this.instance.usePlugin(browserPlugin({
      useHash: false
    }))

    isDev() && this.instance.usePlugin(loggerPlugin)
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
        case (ROUTE_NAMES.projectNew):
          this.rootStore.uiStore.showNewProject()
          break
        default:
          this.rootStore.uiStore.setError(true)
      }
    })

    this.instance.start()
  }

  navigate(route: string, routeParams?: Object): Function {
    return this.instance.navigate(route, routeParams, (err: { code: string }) => {
      if (err) {
        isDev() && console.error(err)
        this.rootStore.uiStore.setError(true)
      }
    })
  }

}

export { ROUTE_NAMES }
export default RouterStore
