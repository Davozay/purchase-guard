// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWluvHsAd5fDIoAJkDncB2ntIova7McLE",
  authDomain: "project-guard-91ade.firebaseapp.com",
  projectId: "project-guard-91ade",
  storageBucket: "project-guard-91ade.firebasestorage.app",
  messagingSenderId: "39752936719",
  appId: "1:39752936719:web:8920e7497a8c9d5955627a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/gmail.readonly');