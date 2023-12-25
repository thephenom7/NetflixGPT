// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgkyRenwmwb0dyodykerzD62NJaLM_TQc",
  authDomain: "netflixgpt-9a13f.firebaseapp.com",
  projectId: "netflixgpt-9a13f",
  storageBucket: "netflixgpt-9a13f.appspot.com",
  messagingSenderId: "807912026414",
  appId: "1:807912026414:web:215c64f4f1fb9dcd9a8abf",
  measurementId: "G-3FZ98ZNX6P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
