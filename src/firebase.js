import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB6CuTDe02ssB9Jr7PpcY6SlXvhJXGPjUg",
  authDomain: "netflix-e8f77.firebaseapp.com",
  projectId: "netflix-e8f77",
  storageBucket: "netflix-e8f77.appspot.com",
  messagingSenderId: "258424529054",
  appId: "1:258424529054:web:a862f4267c7509189b9b8f",
  measurementId: "G-K928M57QL3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;
