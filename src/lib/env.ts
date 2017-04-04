const DEV_MODE_IDENTIFIER = 'dev'

const isDev = (): boolean => {
  return process.env.NODE_ENV === DEV_MODE_IDENTIFIER
}

export {
  DEV_MODE_IDENTIFIER,
  isDev
}
