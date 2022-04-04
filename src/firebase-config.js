import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD8q4jKPdntMlDhsnR7C4rna-fops-7cE",
  authDomain: "xarwin-ar.firebaseapp.com",
  projectId: "xarwin-ar",
  storageBucket: "xarwin-ar.appspot.com",
  messagingSenderId: "878374090844",
  appId: "1:878374090844:web:1bbcaae6e29a25eb758e99",
  measurementId: "G-2N89H1HTT3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();


