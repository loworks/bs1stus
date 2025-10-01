// lib/firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase設定
const firebaseConfig = {
  apiKey: "AIzaSyDyyV9-AyiaGe2t4NUp6t14hmfc-efAiM8",
  authDomain: "bs1st-b99f2.firebaseapp.com",
  projectId: "bs1st-b99f2",
  storageBucket: "bs1st-b99f2.firebasestorage.app",
  messagingSenderId: "42687443962",
  appId: "1:42687443962:web:46c63f473ce4d542e06a43",
  measurementId: "G-16GDNMS2MD",
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
