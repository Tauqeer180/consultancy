// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvYWpYNouJVtH6CIArHBQueBCIQK2NUwk",
  authDomain: "pakshop-ebc26.firebaseapp.com",
  projectId: "pakshop-ebc26",
  storageBucket: "pakshop-ebc26.appspot.com",
  messagingSenderId: "647682696194",
  appId: "1:647682696194:web:d6bf68a2f06ddd2010f31b",
  measurementId: "G-0ZDXQKN9YF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export { app, auth, db, storage };
