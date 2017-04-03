import FirebaseRepository from '../storage/firebaseRepository'
import RootStore from './rootStore'
import { firebaseSignInWithCustomTokenMock, setCustomTokenMock } from './__mocks__/firebase'

import UserStore from './userStore'

describe('UserStore', () => {
  let rootStoreMock: RootStore

  jest.mock('firebase')

  beforeEach(() => {
    firebaseSignInWithCustomTokenMock.mockReset()

    const repository = new FirebaseRepository()
    rootStoreMock = new RootStore(repository, 'me')
  })

  it('should authenticate', async () => {
    // given
    setCustomTokenMock(true)

    // when
    const subject = new UserStore(rootStoreMock, 'me')

    // then
    expect(subject.uid).toBe('me')
    expect(await subject.authenticated).toEqual(true)
    expect(firebaseSignInWithCustomTokenMock.mock.calls.length).toBe(2)
  })

  it('should hold error if authentication fails', async () => {
    // given
    setCustomTokenMock(false)

    // when
    const subject = new UserStore(rootStoreMock, 'me')

    // then
    expect(await subject.authenticated).toBe(false)
  })
})
