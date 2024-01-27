// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-142d1.firebaseapp.com",
  projectId: "mern-blog-142d1",
  storageBucket: "mern-blog-142d1.appspot.com",
  messagingSenderId: "474080958547",
  appId: "1:474080958547:web:d55939faf41f43589dcea6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);