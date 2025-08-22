// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Konfigurasi dari Firebase Console (punyamu)
const firebaseConfig = {
  apiKey: "AIzaSyApg7yMfzHOsJ3ufQ98KolOx5PEOkR8pDw",
  authDomain: "wedding-leo-afifah.firebaseapp.com",
  projectId: "wedding-leo-afifah",
  storageBucket: "wedding-leo-afifah.appspot.com",
  messagingSenderId: "848298852879",
  appId: "1:848298852879:web:b454c7ebdd32a93b85197a",
  measurementId: "G-R7WBZSBL49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
const db = getFirestore(app);

export default db;
