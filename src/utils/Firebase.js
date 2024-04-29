// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//importing for Firebase 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq_4sBZAQxSjdw_WpQRR9M9vx7ES4Ws9w",
  authDomain: "netflixgpt2-d2961.firebaseapp.com",
  projectId: "netflixgpt2-d2961",
  storageBucket: "netflixgpt2-d2961.appspot.com",
  messagingSenderId: "454705778815",
  appId: "1:454705778815:web:6bb5f3a6ad2caee89a6f4a",
  measurementId: "G-S85KY7F2WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();