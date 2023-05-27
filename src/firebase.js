import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXhyNIREMa_IBXj-IKz0SBdmuoXrarGHs",
  authDomain: "zotnfound.firebaseapp.com",
  projectId: "zotnfound",
  storageBucket: "zotnfound.appspot.com",
  messagingSenderId: "1041982308972",
  appId: "1:1041982308972:web:cf7d55e6df62e20ee2ce49",
  measurementId: "G-KQH70XXSCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);