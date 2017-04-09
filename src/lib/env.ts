const env = process.env
const DEV_MODE_IDENTIFIER = 'development'
const TEST_MODE_IDENTIFIER = 'test'

const BACKEND_BASE_URL =
  `${env.REACT_APP_BACKEND_PROTOCOL}://${env.REACT_APP_BACKEND_HOST}:${env.REACT_APP_BACKEND_PORT}`

const backendUrl = (fragment: string): string => {
  return `${BACKEND_BASE_URL}${fragment}`
}

const isDev = (): boolean => {
  return process.env.NODE_ENV === DEV_MODE_IDENTIFIER
}

const isTest = (): boolean => {
  return process.env.NODE_ENV === TEST_MODE_IDENTIFIER
}

export {
  BACKEND_BASE_URL,
  DEV_MODE_IDENTIFIER,
  TEST_MODE_IDENTIFIER,
  backendUrl,
  isDev,
  isTest
}
