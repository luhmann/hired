import * as fetchMock from 'fetch-mock'

fetchMock.get('http://localhost:8000/auth/me', {token: '1234-5678'})

let firebaseSignInWithCustomTokenMock = jest.fn(() => true)

const firebaseSetMock = jest.fn()

const initializeApp = () => {
  return {
    database() {
      return {
        once: jest.fn(),
        ref() {
          return {
            set: firebaseSetMock
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

const setCustomTokenMock = (returnValue: boolean) => {
  firebaseSignInWithCustomTokenMock = jest.fn(() => returnValue)
}

export {
  auth,
  firebaseSetMock,
  firebaseSignInWithCustomTokenMock,
  initializeApp,
  setCustomTokenMock
}