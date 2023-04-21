// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA8OYxbNhk1FkxSO4XwkB-yLkRytZtmJd4",
  authDomain: "blogproject-be739.firebaseapp.com",
  projectId: "blogproject-be739",
  storageBucket: "blogproject-be739.appspot.com",
  messagingSenderId: "1012557482968",
  appId: "1:1012557482968:web:f21a8ce3520d298e7980ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();