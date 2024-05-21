// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
//Configuration devan
// const firebaseConfig = {
//   apiKey: "AIzaSyDy9K9V9tMRsKMZ73dOIRiwquM-vyC1nVI",
//   authDomain: "registration-78709.firebaseapp.com",
//   projectId: "registration-78709",
//   storageBucket: "registration-78709.appspot.com",
//   messagingSenderId: "207657631029",
//   appId: "1:207657631029:web:69e4917cfa98907590a07c",
//   measurementId: "G-ZP11HRQ82R"
// };


//Configuration sd-BeesStore
const firebaseConfig = {
  apiKey: "AIzaSyD8v6CSwzUVoPHlIfUu7ZQtBctw24CT5Bo",
  authDomain: "curiousbees-c54ac.firebaseapp.com",
  projectId: "curiousbees-c54ac",
  storageBucket: "curiousbees-c54ac.appspot.com",
  messagingSenderId: "970130165694",
  appId: "1:970130165694:web:aadf143c86b0af64d073ef",
  measurementId: "G-68Y6WL19XK"
};


// Configuration LV
// const firebaseConfig = {
  //  apiKey: "AIzaSyDpPLA4Nt1FY6hsoseVPYD2JRP7e9ENKD4",
  // authDomain: "srm-timetable-bb661.firebaseapp.com",
  // projectId: "srm-timetable-bb661",
  // storageBucket: "srm-timetable-bb661.appspot.com",
  // messagingSenderId: "1062574904489",
  // appId: "1:1062574904489:web:46160ce4a3c6c9bf6485b8",
  // measurementId: "G-008T9SX14L"
// };




// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const app=initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider =new GoogleAuthProvider()
export { firebase, firestore , auth,provider};
const db = getFirestore(app);

export { db };














