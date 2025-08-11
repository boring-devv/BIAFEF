import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHCxkfsKmE8u1uXrV2A3cMCl-pT6YH_Ks",
  authDomain: "bcsauth.firebaseapp.com",
  projectId: "bcsauth",
  storageBucket: "bcsauth.appspot.com",
  messagingSenderId: "317372488388",
  appId: "1:317372488388:web:61875f5c6da090c9e54791"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); 