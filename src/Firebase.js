// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDeXz8O6ExZCx4ucsQv4T08KEBo0aWzzVA",
    authDomain: "slack-clone-3e286.firebaseapp.com",
    projectId: "slack-clone-3e286",
    storageBucket: "slack-clone-3e286.appspot.com",
    messagingSenderId: "81975631323",
    appId: "1:81975631323:web:04ef7caacd830217889bfe",
    measurementId: "G-WSPEQPYWXW"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth  = firebase.auth();
  const provider = new  firebase.auth.GoogleAuthProvider();
  export { auth,provider}
  export default db;