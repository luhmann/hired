declare module 'router5' {
  export interface RouterInterface {
    usePlugin: Function,
    addListener: Function
    start: Function
    buildPath: Function
    buildUrl: Function
  }

  export function loggerPlugin(): void

  export function Router5(routes: Object[], config: Object): RouterInterface

  export default Router5
}

declare module 'router5/plugins/browser' {
  const browserPlugin: any
  export default browserPlugin
}

declare module 'router5/plugins/listeners' {
  const listenersPlugin: any
  export default listenersPlugin
}

declare module 'router5-link-interceptor' {
  const linkInterceptor: any
  export default linkInterceptor
}

declare module 'react-router5' {
  const RouterProvider: any
  const Link: any
  export { RouterProvider, Link }
}
