/// <reference path="../lib/customTypings.d.ts"/>

import Router5, { RouterInterface, loggerPlugin } from 'router5'
import browserPlugin from 'router5/plugins/browser'
import listenersPlugin from 'router5/plugins/listeners'

import * as log from '../lib/log'
import { isDev } from '../lib/env'
import { RootStore } from '../stores/'
import { VIEW_NAMES } from '../stores/uiStore'

const ROUTES = [
  { name: VIEW_NAMES.projectList, path: '/' },
  { name: VIEW_NAMES.projectOverview, path: '/project/:projectId' },
  { name: VIEW_NAMES.projectNew, path: '/project/new' },
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

    // tslint:disable-next-line
    isDev() && this.instance.usePlugin(loggerPlugin)
    this.instance.usePlugin(listenersPlugin())

    this.instance.addListener((toState: RouterStateInterface, fromState: RouterStateInterface) => {
      this.rootStore.uiStore.setError(false)
      switch (toState.name) {
        case (VIEW_NAMES.projectList):
          this.rootStore.uiStore.showProjectList()
          break
        case (VIEW_NAMES.projectOverview):
          this.rootStore.uiStore.showProject(toState.params.projectId)
          break
        case (VIEW_NAMES.projectNew):
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
        log.error('[Router]: Error while trying to navigate to route', err)
        this.rootStore.uiStore.setError(true)
      }
    })
  }

}

export { VIEW_NAMES }
export default Router
