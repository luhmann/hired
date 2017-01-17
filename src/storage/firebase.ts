import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAcZ4DuQNJdoPhUgx542ra5Rf2Q7cezxHI',
  authDomain: 'mobx-time-tracking-cbeca.firebaseapp.com',
  databaseURL: 'https://mobx-time-tracking-cbeca.firebaseio.com',
  storageBucket: 'mobx-time-tracking-cbeca.appspot.com',
  messagingSenderId: '282276589695'
};

firebase.initializeApp(config);

const database = firebase.database();
const entries = firebase.database().ref('entries');
const authenticate = () => {
  return fetch('http://localhost:8000/auth')
    .then((res) => res.json())
    .then((json: any) => firebase.auth().signInWithCustomToken(json.token))
    .catch((error) => {
      console.log('Failure in auth, check it', error)
    });
};

const Fb = {
  database,
  entries,
  authenticate
};

export { Fb };

export interface StorageEntryInterface {
  startTime: number;
  endTime: number|null
}
