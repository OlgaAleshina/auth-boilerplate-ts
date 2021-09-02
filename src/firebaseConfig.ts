
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {firebaseConfig} from '../firebase.js';
// Your web app's Firebase configuration


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


//export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = app.auth();

export default app;