// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMPj4J7OlI1sSQ8BNXze7aZ2_b0K-FkMY",
  authDomain: "front-end-2024-d.firebaseapp.com",
  databaseURL: "https://front-end-2024-d-default-rtdb.firebaseio.com",
  projectId: "front-end-2024-d",
  storageBucket: "front-end-2024-d.firebasestorage.app",
  messagingSenderId: "552500474771",
  appId: "1:552500474771:web:cddd8a7d4168d7dda9ae66",
  measurementId: "G-FD6P8EK2J2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
