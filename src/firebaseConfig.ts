//import { initializeApp } from 'firebase/app';
//import firebase from "firebase/app";
//import "firebase/auth";
//import "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUZ4Suajbrng2-2pxcIyi52vDFIhB2qw0",
    authDomain: "authboilerplate-d8089.firebaseapp.com",
    projectId: "authboilerplate-d8089",
    storageBucket: "authboilerplate-d8089.appspot.com",
    messagingSenderId: "228302775665",
    appId: "1:228302775665:web:e969a1240dfa1b44e142d0",
    measurementId: "G-5DHZFV7JX0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


//export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = app.auth();

export default app;