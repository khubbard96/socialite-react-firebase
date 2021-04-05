import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

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
    const fs = firebase.firestore();
    const auth = firebase.auth();
    return {fs,auth}
}

export default initFirebase;