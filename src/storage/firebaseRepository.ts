import * as firebase from 'firebase'

class FirebaseRepository {
  private config = {
    apiKey: 'AIzaSyAcZ4DuQNJdoPhUgx542ra5Rf2Q7cezxHI',
    authDomain: 'mobx-time-tracking-cbeca.firebaseapp.com',
    databaseURL: 'https://mobx-time-tracking-cbeca.firebaseio.com',
    storageBucket: 'mobx-time-tracking-cbeca.appspot.com',
    messagingSenderId: '282276589695'
  }

  private app: firebase.app.App

  constructor() {
    this.app = firebase.initializeApp(this.config)
  }

  database(uid: string): firebase.database.Reference {
    return this.app.database().ref(`${uid}`)
  }

  entries(uid: string): firebase.database.Reference {
    return this.app.database().ref(`${uid}/entries`)
  }

  projects(uid: string): firebase.database.Reference {
    return this.app.database().ref(`${uid}/projects`)
  }

  authenticate = async(uid: string = 'me') => {
    try {
      let response = await fetch(`http://localhost:8000/auth/${uid}`)
      let parsed = await response.json()
      return await firebase.auth().signInWithCustomToken(parsed.token)
    } catch (error) {
      // tslint:disable-next-line
      console.log('Failure in auth, check it', error)
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
