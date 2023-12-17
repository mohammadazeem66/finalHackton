import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, query, where, getDocs,collection, addDoc, onSnapshot,updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdTS4dLByZTifEUbFC1lqhZXdfpnv65l8",
  authDomain: "final-hakaton.firebaseapp.com",
  projectId: "final-hakaton",
  storageBucket: "final-hakaton.appspot.com",
  messagingSenderId: "526733120648",
  appId: "1:526733120648:web:f5399969750d626ae6bb3d",
  measurementId: "G-C090FMTEEC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage();
export { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth,updateDoc, auth, doc, setDoc, db, signOut, getStorage, ref, uploadBytes, storage, collection, query, where, getDocs, onAuthStateChanged, getDownloadURL,addDoc, onSnapshot }