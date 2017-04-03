import * as fetchMock from 'fetch-mock'

fetchMock.get('http://localhost:8000/auth/me', {token: '1234-5678'})

export const firebaseSetMock = jest.fn()

export const firebaseSignInWithCustomTokenMock = jest.fn(() => Promise.resolve(true))

export function initializeApp() {
  return {
    database() {
      return {
        ref() {
          return {
            set: firebaseSetMock
          }
        }
      }
    }
  }
}

export function auth() {
  return {
    signInWithCustomToken: firebaseSignInWithCustomTokenMock
  }
}
