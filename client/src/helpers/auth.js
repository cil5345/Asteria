import { auth } from "../services/firebase";

//create a new user using email / pass
export function signup(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
  }
//sign in  will log in existing user created with email and password
  export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
  }