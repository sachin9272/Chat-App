// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwncrI76ptHXH606Bqn_bOy-ziOrYKxKs",
  authDomain: "chat-app-a7474.firebaseapp.com",
  projectId: "chat-app-a7474",
  storageBucket: "chat-app-a7474.appspot.com",
  messagingSenderId: "578860414268",
  appId: "1:578860414268:web:72d8d81a3f65071b735a39",
  measurementId: "G-PM68HS7PX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);