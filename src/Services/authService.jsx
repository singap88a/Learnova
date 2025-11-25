import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import {
  auth,
  googleProvider,
  facebookProvider,
} from "../config/firebaseConfig.js";
import { storage, db } from "../config/firebaseConfig.js";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Sign in with Google
export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

// Sign in with Facebook
export const signInWithFacebook = async () => {
  const result = await signInWithPopup(auth, facebookProvider);
  return result.user;
};

// Sign up with Email & Password and set display name
export const signUpWithEmail = async (displayName, email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  if (displayName) {
    await updateProfile(auth.currentUser, { displayName });
  }
  return userCredential.user;
};

// Sign in with Email & Password
export const signInWithEmail = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

// Send password reset email
export const sendResetEmail = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};

// Update user profile
export const updateUserProfile = async (profile) => {
  if (!auth.currentUser) throw new Error("No authenticated user");
  return await updateProfile(auth.currentUser, profile);
};

// Update authenticated user's email
export const updateUserEmail = async (email) => {
  if (!auth.currentUser) throw new Error("No authenticated user");
  return await updateEmail(auth.currentUser, email);
};

// Sign out
export const logout = async () => {
  return await signOut(auth);
};

// Upload profile photo to Firebase Storage and return download URL
export const uploadProfilePhoto = async (file) => {
  if (!auth.currentUser) throw new Error("No authenticated user");
  if (!file) throw new Error("No file provided");
  const uid = auth.currentUser.uid;
  const ext = file.name.split(".").pop();
  const path = `profilePhotos/${uid}_${Date.now()}.${ext}`;
  const ref = storageRef(storage, path);
  await uploadBytes(ref, file);
  const url = await getDownloadURL(ref);
  return url;
};

// Save extra user metadata (phone, bio, etc.) to Firestore
export const saveUserData = async (uid, data) => {
  if (!uid) throw new Error("uid required");
  const userDoc = doc(db, "users", uid);
  await setDoc(userDoc, data, { merge: true });
  return true;
};

// Get extra user metadata from Firestore
export const getUserData = async (uid) => {
  if (!uid) return null;
  const userDoc = doc(db, "users", uid);
  const snap = await getDoc(userDoc);
  if (!snap.exists()) return null;
  return snap.data();
};
