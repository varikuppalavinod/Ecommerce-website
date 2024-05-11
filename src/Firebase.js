import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLedg5jzm00E9kPND4FG9kuKewUFMNOtY",
  authDomain: "authentication-deb56.firebaseapp.com",
  databaseURL: "https://authentication-deb56-default-rtdb.firebaseio.com",
  projectId: "authentication-deb56",
  storageBucket: "authentication-deb56.appspot.com",
  messagingSenderId: "445026256398",
  appId: "1:445026256398:web:6b019c355a1f127a6e5e5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };