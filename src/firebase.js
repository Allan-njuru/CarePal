import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKPdjQ5Sanj4V07f1mJZcVdXVerNxCrIw",
  authDomain: "carelink-app-e0718.firebaseapp.com",
  projectId: "carelink-app-e0718",
  storageBucket: "carelink-app-e0718.appspot.com",
  messagingSenderId: "1069249186249",
  appId: "1:1069249186249:web:2e1d050a138377a363c018",
  measurementId: "G-5JKNNW5N9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services for use in your app
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;