
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {firebaseConfig} from './firebaseConfig'
import {getStorage} from "firebase/storage"
// Tus configuraciones de Firebase



let firebaseApp;
    try {
      firebaseApp = initializeApp(firebaseConfig);
    } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
      }
      firebaseApp = getApp(); // Si ya está inicializado, úsalo.
    }

export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);


