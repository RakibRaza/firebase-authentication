import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCmA4Kze5cDvI8XmeBdVptoA9xz-ywSPXg",
  authDomain: "auth-practice-abad2.firebaseapp.com",
  projectId: "auth-practice-abad2",
  storageBucket: "auth-practice-abad2.appspot.com",
  messagingSenderId: "461530235648",
  appId: "1:461530235648:web:c0fdd2a60c11f36e6e29e5",
});
export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const fbProvider = new firebase.auth.FacebookAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
