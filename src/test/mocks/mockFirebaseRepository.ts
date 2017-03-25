// import * as TypeMoq from 'typemoq';

import FirebaseRepository from '../../storage/firebaseRepository'

// const mockRepository = TypeMoq.Mock.ofType(FirebaseRepository)

// mockRepository.setup(x => x.authenticate()).returns((uid: string) => Promise.resolve(true))
// // mockRepository.setup(x => )

// export default mockRepository


// class FirebaseMock {
//   entries = jest.fn()
//   database = jest.fn()
//   projects = jest.fn()
//   authenticate = jest.fn()

//   constructor() {

  //   this.authenticate.mockReturnValue(Promise.resolve(true))

  //   this.database.mockReturnValue({
  //     once: jest.fn().mockReturnValue({
  //       val: jest.fn().mockReturnValue({})
  //     })
  //   })

  //   this.entries.mockReturnValue({
  //     set: jest.fn()
  //   })

  //   this.projects.mockReturnValue({
  //     set: jest.fn()
  //   })

  // }
// }

// export default FirebaseMock

// const FirebaseMock = <FirebaseRepository>{
//   config: {
//     apiKey: '',
//     authDomain: '',
//     databaseURL: '',
//     storageBucket: '',
//     messagingSenderId: ''
//   },
//   entries: jest.fn(),
//   database: jest.fn(),
//   projects: jest.fn(),
//   authenticate: jest.fn()
// }

const FirebaseMock = <FirebaseRepository>{}

FirebaseMock.entries = jest.fn()

FirebaseMock.database = jest.fn().mockReturnValue({
      once: jest.fn().mockReturnValue({
        val: jest.fn().mockReturnValue({})
      })
    })

FirebaseMock.database = jest.fn().mockReturnValue({
  once: jest.fn().mockReturnValue({
    val: jest.fn().mockReturnValue({})
  })
})

FirebaseMock.entries = jest.fn().mockReturnValue({
  set: jest.fn()
})

FirebaseMock.projects = jest.fn().mockReturnValue({
  set: jest.fn()
})


FirebaseMock.authenticate = jest.fn().mockReturnValue(Promise.resolve(true))


export default FirebaseMock
