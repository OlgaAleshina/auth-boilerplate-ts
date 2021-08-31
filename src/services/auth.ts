import firebase from '../firebaseConfig';
import {FormProps} from "../common/index";

export function login ({email, password}:FormProps) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
};

export function signup ({email, password}:FormProps) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
};
