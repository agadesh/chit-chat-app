// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe70tzu4G_VQROUe0lGv-VadeCg1V7D58",
  authDomain: "chat-app-1699.firebaseapp.com",
  projectId: "chat-app-1699",
  storageBucket: "chat-app-1699.appspot.com",
  messagingSenderId: "253672062709",
  appId: "1:253672062709:web:53caac2202858936668fbc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
