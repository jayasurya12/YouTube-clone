import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA5GQYuNQDYTIwPbc9_jE-sAZxCazPvbkk",
    authDomain: "fir-dbfdc.firebaseapp.com",
    projectId: "fir-dbfdc",
    storageBucket: "fir-dbfdc.appspot.com",
    messagingSenderId: "17742978144",
    appId: "1:17742978144:web:142dacd09e2e17a31fb705"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth= firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider()
const storage=firebase.storage()

export {db,auth,provider,storage};