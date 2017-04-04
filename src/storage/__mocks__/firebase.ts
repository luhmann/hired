import * as fetchMock from 'fetch-mock'

fetchMock.get('http://localhost:8000/auth/me', {token: '1234-5678'})

let firebaseSignInWithCustomTokenMock = jest.fn(() => true)
let firebaseValMock = jest.fn(() => ({}))
const firebaseSetMock = jest.fn()

let firebaseOnceMock = jest.fn(() => (Promise.resolve({
  val: firebaseValMock
})))

const initializeApp = () => {
  return {
    database() {
      return {
        ref() {
          return {
            set: firebaseSetMock,
            once: firebaseOnceMock
          }
        }
      }
    }
  }
}

const auth = () => {
  return {
    signInWithCustomToken: firebaseSignInWithCustomTokenMock
  }
}

const setFirebaseValMock = (returnValue: object) => {
  firebaseValMock = jest.fn(() => returnValue)
}

const setCustomTokenMock = (returnValue: boolean) => {
  firebaseSignInWithCustomTokenMock = jest.fn(() => returnValue)
}

const setFirebaseOnceMock = (returnValue: Promise<{}>) => {
  firebaseOnceMock = firebaseOnceMock.mockImplementationOnce(() => returnValue)
}

export {
  auth,
  firebaseSetMock,
  firebaseSignInWithCustomTokenMock,
  firebaseOnceMock,
  firebaseValMock,
  initializeApp,
  setCustomTokenMock,
  setFirebaseOnceMock,
  setFirebaseValMock
}
