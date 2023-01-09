// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZSOnCvcWXl9WIfsnoxdFs5xdEnA8l41E",
  authDomain: "geniustore-cdcbe.firebaseapp.com",
  projectId: "geniustore-cdcbe",
  storageBucket: "geniustore-cdcbe.appspot.com",
  messagingSenderId: "109789760269",
  appId: "1:109789760269:web:ed5164edf01414b8b83e44",
  measurementId: "G-0FEQPWY5P9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore initialize
const db = getFirestore(app);

export default db;