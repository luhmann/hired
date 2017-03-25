import * as TypeMoq from 'typemoq';
import firebaseRepository from '../storage/firebaseRepository'
import UserStore from './userStore'

describe('UserStore', () => {
  let firebaseRepositoryMock

  beforeEach(() => {
    firebaseRepositoryMock = TypeMoq.Mock.ofType(firebaseRepository)
})

  it('should authenticate', async () => {
    // given
    firebaseRepositoryMock
      .setup((frm => frm.authenticate(TypeMoq.It.isAnyString())))
      .returns(() => Promise.resolve(true))

    // when
    const subject = new UserStore(firebaseRepositoryMock.object, 'me')

    // then
    expect(subject.uid).toBe('me')
    expect(await subject.authenticated).toBe(true)
    firebaseRepositoryMock.verify((frm) => frm.authenticate(TypeMoq.It.isValue('me')), TypeMoq.Times.once())
  })
})
