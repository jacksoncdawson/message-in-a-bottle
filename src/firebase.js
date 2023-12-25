import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi9yA2MOKXXRURqQJrukwQRUVgK5HVU7Q",
  authDomain: "message-in-a-bottle-bb947.firebaseapp.com",
  projectId: "message-in-a-bottle-bb947",
  storageBucket: "message-in-a-bottle-bb947.appspot.com",
  messagingSenderId: "139381844888",
  appId: "1:139381844888:web:93f5e0d1a793f193f219ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;