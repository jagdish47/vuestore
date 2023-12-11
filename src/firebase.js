import { initializeApp } from "firebase/app";

//firebase firestore
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore/lite";

//firebase storeage function
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpyWK4iMMXk_vN2ySBs4IB2N5TIquxdRM",
  authDomain: "vuestore-40419.firebaseapp.com",
  projectId: "vuestore-40419",
  storageBucket: "vuestore-40419.appspot.com",
  messagingSenderId: "237229832178",
  appId: "1:237229832178:web:c1bc048c9b72fd2ad95d6b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app,
  db,
  collection,
  getDocs,
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  addDoc,
  doc,
  getDoc,
};
