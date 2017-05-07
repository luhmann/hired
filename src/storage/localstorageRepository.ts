import { StorageRepositoryInterface } from './storageAdapter'

class LocalStorageRepository implements StorageRepositoryInterface {
  keyPrefix: string = 'hired:'

  reference(key: string) {
    const storageKey = this.getKeyName(key)

    return {
      set(value: string) {
        localStorage.setItem(storageKey, JSON.stringify(value))
      },
      once(value: string) {
        return {
          val() {
            let returnValue = {}

            if (storageKey.indexOf('/') === -1) {
              for (let k in localStorage) {
                if (localStorage.hasOwnProperty(k) && k.startsWith(storageKey)) {
                  const storageValue = localStorage.getItem(k)
                  if (storageValue) {
                    const cleanKey = k.split(':')
                    returnValue[cleanKey[1].split('/')[1]] = JSON.parse(storageValue)
                  }
                }
              }
            } else {
              const storageValue = localStorage.getItem(storageKey)
              returnValue = storageValue ? JSON.parse(storageValue) : null
            }

            return returnValue
          }
        }
      }
    }
  }

  async authenticate(uid: string) {
    return {
      uid
    }
  }

  private getKeyName(key: string): string {
    return `${this.keyPrefix}${key}`
  }
}

export default LocalStorageRepository
