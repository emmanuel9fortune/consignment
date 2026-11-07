import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBO505u5S1nQCvwifG8fA8DIIwOfRHCV9E",
  authDomain: "consignmentb.firebaseapp.com",
  projectId: "consignmentb",
  storageBucket: "consignmentb.firebasestorage.app",
  messagingSenderId: "343124732900",
  appId: "1:343124732900:web:20cbbe28b9b27c5b4ef5f1",
  measurementId: "G-LCWLNT8ZLN"
};

const app = firebase.initializeApp(firebaseConfig)

export const db = app.firestore()

export  const auth = app.auth()

export const storage = getStorage(app)

export const Provider = new firebase.auth.GoogleAuthProvider()
