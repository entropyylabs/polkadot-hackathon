// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "stamps-polkadot.firebaseapp.com",
  projectId: "stamps-polkadot",
  storageBucket: "stamps-polkadot.appspot.com",
  messagingSenderId: "229989984878",
  appId: "1:229989984878:web:fac754afc0593af013147f",
  measurementId: "G-L7CRHG08NP",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;
