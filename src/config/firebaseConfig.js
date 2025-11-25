// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBsZHIBtDRbRAyrwNkXNGxwXWj-3FC2VBM",
  authDomain: "fir-frontend-29b88.firebaseapp.com",
  projectId: "fir-frontend-29b88",
  storageBucket: "fir-frontend-29b88.firebasestorage.app",
  messagingSenderId: "470930157407",
  appId: "1:470930157407:web:ae5167127fe8c0fb4c90ea",
  measurementId: "G-FQXQDG3P0J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

// Providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
