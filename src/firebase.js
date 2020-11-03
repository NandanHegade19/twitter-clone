import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAkAB5qhK_ZNiDCHIs2r6_4y3qBJtIaMMk",
    authDomain: "twitter-clone-bad35.firebaseapp.com",
    databaseURL: "https://twitter-clone-bad35.firebaseio.com",
    projectId: "twitter-clone-bad35",
    storageBucket: "twitter-clone-bad35.appspot.com",
    messagingSenderId: "137805700566",
    appId: "1:137805700566:web:ff685c11953bb06eb91877"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;