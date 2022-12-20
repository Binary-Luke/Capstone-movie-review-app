// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGFlgaZz3-uuRhKShXA1vVsLBIzFMQuZs",
  authDomain: "movie-review-blog-636bd.firebaseapp.com",
  projectId: "movie-review-blog-636bd",
  storageBucket: "movie-review-blog-636bd.appspot.com",
  messagingSenderId: "668740187216",
  appId: "1:668740187216:web:386dd9e5d80372a4d6cd55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();