// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOofUAl4JRN1PBO7ZPDglnvFugSNZIZX8",
  authDomain: "start-your-tour-68f4c.firebaseapp.com",
  projectId: "start-your-tour-68f4c",
  storageBucket: "start-your-tour-68f4c.appspot.com",
  messagingSenderId: "578208796228",
  appId: "1:578208796228:web:4ba2f4b4d5f3eff5fd3611",
  measurementId: "G-VP4JF77Z19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);