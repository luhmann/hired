import FirebaseRepository from '../storage/firebaseRepository'
import RootStore from './rootStore'
import { firebaseSignInWithCustomTokenMock } from './__mocks__/firebase'

import UserStore from './userStore'

describe('UserStore', () => {
  let rootStoreMock: RootStore

  beforeEach(() => {
    jest.mock('firebase')
    firebaseSignInWithCustomTokenMock.mockReset()

    const repository = new FirebaseRepository()
    rootStoreMock = new RootStore(repository, 'me')
  })

  it('should authenticate', async () => {
    // when
    const subject = new UserStore(rootStoreMock, 'me')

    // then
    expect(subject.uid).toBe('me')
    expect(await subject.authenticated).toBe(true)
    expect(firebaseSignInWithCustomTokenMock.mock.calls.length).toBe(2)
  })

})
