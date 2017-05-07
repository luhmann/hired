import { FirebaseRepository, StorageAdapter } from '../../storage/'
import { firebaseOnceMock, setFirebaseOnceMock } from '../../storage/__mocks__/firebase'

import {
  EntryListStore,
  ProjectListStore,
  UiStore,
  RootStore,
  UserStore
} from '../'
import Router from '../../lib/router'

describe('RootStore', () => {
  let storageMock: StorageAdapter
  let subject: RootStore

  beforeEach(() => {
    firebaseOnceMock.mockClear()
    const firebaseRepositoryMock = new FirebaseRepository()
    storageMock = new StorageAdapter(firebaseRepositoryMock)
    subject = new RootStore(storageMock, 'me')
  })

  it('should initialize', () => {
    expect(subject.storage).toBe(storageMock)
    expect(subject.userStore).toBeInstanceOf(UserStore)
    expect(subject.entryListStore).toBeInstanceOf(EntryListStore)
    expect(subject.projectListStore).toBeInstanceOf(ProjectListStore)
    expect(subject.uiStore).toBeInstanceOf(UiStore)
  })

  it('should set uiState to loaded if there is no error', async () => {
    await subject.fetchData()
    expect(subject.uiStore.isLoaded).toBe(true)
  })

  it('should set uiState to error if there is an error while fetching the data', async () => {
    setFirebaseOnceMock(Promise.reject('Error'))

    await subject.fetchData()

    expect(subject.uiStore.hasError).toBe(true)
  })
})
