import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDYU7ykp9MozOttYu7EYMddCdGF6FbVjZw',
  authDomain: 'disney-plus-rebuild.firebaseapp.com',
  projectId: 'disney-plus-rebuild',
  storageBucket: 'disney-plus-rebuild.appspot.com',
  messagingSenderId: '468877866196',
  appId: '1:468877866196:web:ad1f13e32d10f77419f741',
};

const app = !firebase.app.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
