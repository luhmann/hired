/* tslint:disable no-console */
import { isDev, isTest } from './env'

const log = (...args: any[]): void => {
  if (isDev() || isTest()) {
    console.log(args)
  }
}

const info = (...args: any[]): void => {
  if (isDev() || isTest()) {
    console.info(args)
  }
}

const warn = (...args: any[]): void => {
  if (isDev() || isTest()) {
    console.warn(args)
  }
}

const error = (...args: any[]): void => {
  if (isDev() || isTest()) {
    console.error(args)
  } else {
    // TODO: implement error-logger
  }

}

export {
  log,
  info,
  warn,
  error
}
