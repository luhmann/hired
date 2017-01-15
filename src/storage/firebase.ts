import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDt83bvU6CXetNYGRWuaI12nLxpEbytR6I',
  authDomain: 'mobx-time-tracking.firebaseapp.com',
  databaseURL: 'https://mobx-time-tracking.firebaseio.com',
  storageBucket: 'mobx-time-tracking.appspot.com',
  messagingSenderId: '866097267685'
};
firebase.initializeApp(config);

const database = firebase.database();
const entries = firebase.database().ref('entries');

const Fb = {
  database,
  entries
};

export { Fb };

export interface IStorageObject {
  startTime: number;
  endTime: number|null;
  running: Boolean;
}
