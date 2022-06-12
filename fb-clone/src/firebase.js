// import { firebase } from 'firebase';
import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
     apiKey: "AIzaSyDfSi-d6RX1WVWzv4MjI3pmp7E9NYIR_V8",
     authDomain: "facebook-clone-5d1f7.firebaseapp.com",
     databaseURL: "https://facebook-clone-5d1f7-default-rtdb.firebaseio.com",
     projectId: "facebook-clone-5d1f7",
     storageBucket: "facebook-clone-5d1f7.appspot.com",
     messagingSenderId: "215356965811",
     appId: "1:215356965811:web:5687ac6b441a408d5101c6",
     measurementId: "G-T9QF0DW02F"
   };

   const firebaseApp = initializeApp(firebaseConfig);
   const db = getFirestore(firebaseApp);
   const auth = getAuth(firebaseApp);
   const provider = new GoogleAuthProvider();

   export { auth, provider };
   export default db;