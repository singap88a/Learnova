// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBsZHIBtDRbRAyrwNkXNGxwXWj-3FC2VBM",
  authDomain: "fir-frontend-29b88.firebaseapp.com",
  projectId: "fir-frontend-29b88",
  storageBucket: "fir-frontend-29b88.firebasestorage.app",
  messagingSenderId: "470930157407",
  appId: "1:470930157407:web:ae5167127fe8c0fb4c90ea",
  measurementId: "G-FQXQDG3P0J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);