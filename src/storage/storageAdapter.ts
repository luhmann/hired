interface StorageReferenceInterface {
  set(value: string): any
  once(eventType: string): any
}

interface StorageRepositoryInterface {
  reference(key: string): StorageReferenceInterface
  authenticate(uid: string): Promise<{uid: string}>
}

class StorageAdapter {

  repository: StorageRepositoryInterface

  constructor(repository: StorageRepositoryInterface) {
    this.repository = repository
  }

  database(uid: string): StorageReferenceInterface {
    return this.repository.reference(`${uid}`)
  }

  entries(uid: string): StorageReferenceInterface {
    return this.repository.reference(`${uid}/entries`)
  }

  projects(uid: string): StorageReferenceInterface {
    return this.repository.reference(`${uid}/projects`)
  }

  async authenticate(uid: string = 'me') {
    return this.repository.authenticate(uid)
  }

}

export default StorageAdapter
export { StorageReferenceInterface, StorageRepositoryInterface }
