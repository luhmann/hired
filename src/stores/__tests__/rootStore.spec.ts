import FirebaseRepository from '../../storage/firebaseRepository'
import { firebaseOnceMock, setFirebaseOnceMock } from '../../storage/__mocks__/firebase'

import {
  EntryListStore,
  ProjectListStore,
  UiStore,
  RootStore,
  RouterStore,
  UserStore
} from '../'

describe('RootStore', () => {
  let firebaseRepositoryMock: FirebaseRepository
  let subject: RootStore

  beforeEach(() => {
    firebaseOnceMock.mockClear()
    firebaseRepositoryMock = new FirebaseRepository()
    subject = new RootStore(firebaseRepositoryMock, 'me')
  })

  it('should initialize', () => {
    expect(subject.repository).toBe(firebaseRepositoryMock)
    expect(subject.userStore).toBeInstanceOf(UserStore)
    expect(subject.entryListStore).toBeInstanceOf(EntryListStore)
    expect(subject.projectListStore).toBeInstanceOf(ProjectListStore)
    expect(subject.uiStore).toBeInstanceOf(UiStore)
    expect(subject.routerStore).toBeInstanceOf(RouterStore)
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
