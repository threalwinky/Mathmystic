// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWXlbIB03xAYD7ijd8GdJdawuO71Rabcc",
  authDomain: "test-7ac27.firebaseapp.com",
  projectId: "test-7ac27",
  storageBucket: "test-7ac27.appspot.com",
  messagingSenderId: "574874482002",
  appId: "1:574874482002:web:a59e551086a0b023c0368b",
  measurementId: "G-VHVS8PE5SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore()