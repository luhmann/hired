import * as firebase from 'firebase'
import * as log from '../lib/log'

import { backendUrl } from '../lib/env'
import { StorageRepositoryInterface } from './storageAdapter'

class FirebaseRepository implements StorageRepositoryInterface {
  private config = Object.freeze({
    apiKey: `${process.env.REACT_APP_FB_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FB_AUTH_DOMAIN}`,
    databaseURL: `${process.env.REACT_APP_FB_DATABASE_URL}`,
    storageBucket: `${process.env.REACT_APP_FB_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_FB_MESSAGING_SENDER_ID}`
  })

  private app: firebase.app.App

  constructor() {
    this.app = firebase.initializeApp(this.config)
  }

  reference(key: string): any {
    return this.app.database().ref(key)
  }

  async authenticate(uid: string = 'me') {
    try {
      let response = await fetch(backendUrl(`/auth/${uid}`))
      let parsed = await response.json()
      return await firebase.auth().signInWithCustomToken(parsed.token)
    } catch (error) {
      log.error('[Firebase Storage]: Failure during authentication', error)
      return false
    }
  }
}

export default FirebaseRepository

export interface StorageEntryInterface {
  id: string,
  startTime: number
  endTime: number|null, // endTime has to be null to better store in firebase
  rate: number,
  projectId: string
}
