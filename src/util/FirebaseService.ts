import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let auth: firebase.auth.Auth, fs: firebase.firestore.Firestore;

const initFirebase = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyCZYArgrImE6cadZ51AeiVG_B92E1exzoI",
    authDomain: "socialite-1dc65.firebaseapp.com",
    projectId: "socialite-1dc65",
    storageBucket: "socialite-1dc65.appspot.com",
    messagingSenderId: "425793771165",
    appId: "1:425793771165:web:97ac2861de070df24be674",
    measurementId: "G-1B0Y4G461H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  fs = firebase.firestore();
  fs.settings({ experimentalForceLongPolling: true });
  auth = firebase.auth();
};

export const getFirestore = (): firebase.firestore.Firestore => {
  if (!fs) {
    initFirebase();
  }
  return fs || ({} as firebase.firestore.Firestore);
};

export const getFirebaseAuth = (): firebase.auth.Auth => {
  if (!auth) {
    initFirebase();
  }
  return auth || ({} as firebase.auth.Auth);
};

const getFirestoreAndAuth = () => {
  const fs = getFirestore();
  const auth = getFirebaseAuth();
  return { fs, auth };
};

export default getFirestoreAndAuth;
