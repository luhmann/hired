import * as firebase from 'firebase'
import uiStore from '../stores/uiStore'
import projectStore from '../stores/projectStore'

const config = {
  apiKey: 'AIzaSyAcZ4DuQNJdoPhUgx542ra5Rf2Q7cezxHI',
  authDomain: 'mobx-time-tracking-cbeca.firebaseapp.com',
  databaseURL: 'https://mobx-time-tracking-cbeca.firebaseio.com',
  storageBucket: 'mobx-time-tracking-cbeca.appspot.com',
  messagingSenderId: '282276589695'
}

firebase.initializeApp(config)

const database = () => firebase.database().ref(`${uiStore.uid}`)
const entries = (project: string) => firebase.database().ref(`${uiStore.uid}/${project}/entries`)
const currentProjectEntries = () => entries(projectStore.currentProject.id)

const authenticate = (uid = 'me') => {
  return fetch(`http://localhost:8000/auth/${uid}`)
    .then((res) => res.json())
    .then((json: any) => firebase.auth().signInWithCustomToken(json.token))
    .catch((error) => {
      // tslint:disable-next-line
      console.log('Failure in auth, check it', error)
    })
}

const Fb = {
  database,
  entries,
  currentProjectEntries,
  authenticate
}

export { Fb }

export interface StorageEntryInterface {
  startTime: number
  endTime: number|null,
  rate?: number
}
