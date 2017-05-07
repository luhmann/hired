import { ReactWrapper } from 'enzyme'

import { FirebaseRepository, StorageAdapter } from '../src/storage/'
import { RootStore } from '../src/stores/'


const enterText = (subject: ReactWrapper<any, any>, text: any): void => {
  subject.node.value = text
  subject.simulate('change')
}

const createRootStore = (user: string = 'me'): RootStore => {
  jest.mock('firebase')
  const repositoryMock = new FirebaseRepository()
  const storage = new StorageAdapter(repositoryMock)
  return new RootStore(storage, user)
}

export {
  createRootStore,
  enterText
}
