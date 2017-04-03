import * as TypeMoq from 'typemoq'

import FirebaseRepository from '../storage/firebaseRepository'
import RootStore from './rootStore'
import { firebaseSignInWithCustomTokenMock } from './__mocks__/firebase'

import UserStore from './userStore'

describe('UserStore', () => {
  let rootStoreMock: TypeMoq.IMock<RootStore>

  beforeEach(() => {
    jest.mock('firebase')
    firebaseSignInWithCustomTokenMock.mockReset()

    const repository = new FirebaseRepository()
    rootStoreMock = TypeMoq.Mock.ofType(RootStore, TypeMoq.MockBehavior.Loose, repository, 'me')
  })

  it('should authenticate', async () => {
    // when
    const subject = new UserStore(rootStoreMock.object, 'me')

    // then
    expect(subject.uid).toBe('me')
    expect(await subject.authenticated).toBe(true)
    expect(firebaseSignInWithCustomTokenMock.mock.calls.length).toBe(2)
  })
})
