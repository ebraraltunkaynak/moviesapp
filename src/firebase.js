// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApY2ubKc4v33NrmkgGYD966Vx10iQN1pQ",
  authDomain: "movieapp-7412a.firebaseapp.com",
  projectId: "movieapp-7412a",
  storageBucket: "movieapp-7412a.appspot.com",
  messagingSenderId: "127074697502",
  appId: "1:127074697502:web:78505b494f99c8c3b0090f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app)