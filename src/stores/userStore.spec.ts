// import { RepositoryInterface } from '../storage/firebaseRepository'
// // import mockFirebaseRepository from '../test/mocks/mockFirebaseRepository'

// import RootStore from './rootStore'
// import UserStore from './userStore'

// describe('UserStore', () => {
//   it('should authenticate', async () => {
//     const RootStoreMock = <RootStore>{}
//     RootStoreMock.repository = <RepositoryInterface>{
//       entries: jest.fn(),
//       database: jest.fn(),
//       projects: jest.fn(),
//       authenticate: jest.fn().mockReturnValue(Promise.resolve(true))
//     }

//     const subject = new UserStore(RootStoreMock, 'me')
//     expect(subject.uid).toBe('me')
//     expect(RootStoreMock.repository.authenticate.mock.calls.length).toBe(1)
//     console.log(RootStoreMock.repository.authenticate.mock)
//     expect(await subject.authenticated).toBe(true)
//   })
// })
