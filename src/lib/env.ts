const DEV_MODE_IDENTIFIER = 'dev'

const BACKEND_BASE_URL = 
  `${process.env.REACT_APP_BACKEND_PROTOCOL}://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}`

const backendUrl = (fragment: string): string => {
  return `${BACKEND_BASE_URL}${fragment}`
}

const isDev = (): boolean => {
  return process.env.NODE_ENV === DEV_MODE_IDENTIFIER
}

export {
  BACKEND_BASE_URL,
  DEV_MODE_IDENTIFIER,
  backendUrl,
  isDev
}
