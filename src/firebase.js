import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firebase-auth'
require('firebase/firestore')


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCQaW3iqY3kgIHDilmjXUYFic-e8-zpimA",
  authDomain: "olshop-868c9.firebaseapp.com",
  databaseURL: "https://olshop-868c9.firebaseio.com",
  projectId: "olshop-868c9",
  storageBucket: "olshop-868c9.appspot.com",
  messagingSenderId: "815534594834",
  appId: "1:815534594834:web:660fff4b767c50db8fb1cb",
  measurementId: "G-B8D2H3M1NW"
};

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
export { fb, db }