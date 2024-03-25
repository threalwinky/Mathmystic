// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrexUf-AokAnTzCJciRiGTMPG9zaRjsZY",
  authDomain: "mathmystic-81270.firebaseapp.com",
  projectId: "mathmystic-81270",
  storageBucket: "mathmystic-81270.appspot.com",
  messagingSenderId: "766233772383",
  appId: "1:766233772383:web:3dd74bdeae6c057ca6f6ea",
  measurementId: "G-7R86SHEJWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore()