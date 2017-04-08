const DEV_MODE_IDENTIFIER = 'dev'

const BACKEND_BASE_URL = `${process.env.BACKEND_PROTOCOL}://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}`

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
