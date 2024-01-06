import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe6cGWCqpndNtziiapnnqXUOn4KVn-ZKM",
  authDomain: "blog-be28b.firebaseapp.com",
  projectId: "blog-be28b",
  storageBucket: "blog-be28b.appspot.com",
  messagingSenderId: "605043338640",
  appId: "1:605043338640:web:d42ff3f86800adb23a9715"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };