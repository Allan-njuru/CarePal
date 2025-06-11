// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKPdjQ5Sanj4V07f1mJZcVdXVerNxCrIw",
  authDomain: "carelink-app-e0718.firebaseapp.com",
  projectId: "carelink-app-e0718",
  storageBucket: "carelink-app-e0718.appspot.com", // <-- fixed typo here!
  messagingSenderId: "1069249186249",
  appId: "1:1069249186249:web:2e1d050a138377a363c018",
  measurementId: "G-5JKNNW5N9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth to use in your components
export const auth = getAuth(app);
export default app;