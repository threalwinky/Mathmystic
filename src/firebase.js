// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVBmusNHkQQMmQxsdnYTMnqBl-KuENOzI",
  authDomain: "mathmystic-4060f.firebaseapp.com",
  projectId: "mathmystic-4060f",
  storageBucket: "mathmystic-4060f.appspot.com",
  messagingSenderId: "886261322794",
  appId: "1:886261322794:web:ddf94cb71cc3668c405f53",
  measurementId: "G-EGQVG3N0YF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);