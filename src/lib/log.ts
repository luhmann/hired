/* tslint:disable no-console */
import { isDev } from './env'

const log = (...args: any[]): void => {
  if (isDev()) {
    console.log(args)
  }
}

const info = (...args: any[]): void => {
  if (isDev()) {
    console.info(args)
  }
}

const warn = (...args: any[]): void => {
  if (isDev()) {
    console.warn(args)
  }
}

const error = (...args: any[]): void => {
  if (isDev()) {
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
