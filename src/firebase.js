// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDD2F-hzKHDLiyApaivGxi-jJztfEvgPYE',
  authDomain: 'portfolio-vuejs-47cc1.firebaseapp.com',
  projectId: 'portfolio-vuejs-47cc1',
  storageBucket: 'portfolio-vuejs-47cc1.appspot.com',
  messagingSenderId: '37138377847',
  appId: '1:37138377847:web:4916ebd17de0106a252a72',
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
const db = getFirestore(app);
const storage = getStorage(app);

export {
  app,
  db,
  storage,
  collection,
  getDocs,
  ref,
  getDownloadURL,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
};
