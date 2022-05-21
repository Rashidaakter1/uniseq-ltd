// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRkRugIjjJ05EdZUyCMLrj_pDn0qKQnXE",
  authDomain: "computer-parts-d6618.firebaseapp.com",
  projectId: "computer-parts-d6618",
  storageBucket: "computer-parts-d6618.appspot.com",
  messagingSenderId: "77253573233",
  appId: "1:77253573233:web:cf41394f4652f7464279d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;