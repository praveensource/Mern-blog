// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9490e.firebaseapp.com",
  projectId: "mern-blog-9490e",
  storageBucket: "mern-blog-9490e.firebasestorage.app",
  messagingSenderId: "92493526019",
  appId: "1:92493526019:web:f91ed4fcba4a0543d3ca36"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

