// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQhsJ2kVH_Rx5IQo8B6tp7H9n5ldGdDVI",
  authDomain: "unit-7-blog-app.firebaseapp.com",
  projectId: "unit-7-blog-app",
  storageBucket: "unit-7-blog-app.appspot.com",
  messagingSenderId: "63964598995",
  appId: "1:63964598995:web:ea5eda51b3b5f956d9ba26",
  measurementId: "G-8TV9KFMBCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// setup database and export it
export const db = getFirestore(app)

// analytics
const analytics = getAnalytics(app);