// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuIl1h7q1_YkQ41QmzuTMuIbcxPkX10A8",
  authDomain: "genius-car-services-c1a93.firebaseapp.com",
  projectId: "genius-car-services-c1a93",
  storageBucket: "genius-car-services-c1a93.appspot.com",
  messagingSenderId: "1021688214466",
  appId: "1:1021688214466:web:c48bb41803d79e412c9c5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//auth declaration

const auth = getAuth(app);
export default auth;
