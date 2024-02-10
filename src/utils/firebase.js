// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2jdrfIgm2Lplo598p0DJPljg4GJWv5xc",
  authDomain: "netflixgpt-26dce.firebaseapp.com",
  projectId: "netflixgpt-26dce",
  storageBucket: "netflixgpt-26dce.appspot.com",
  messagingSenderId: "643852377171",
  appId: "1:643852377171:web:a29c2a20b8b0a359eefaa6",
  measurementId: "G-2JRXN2SNXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();