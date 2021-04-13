import React from "react";
import useAuth from "../store/useAuth";
import firebase from "firebase/app";

const SignIn: React.FC = () => {
  const auth = useAuth((state) => state.auth);
  const;

  const signIn = () => {
    auth?.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  return <button onClick={signIn}>Sign in</button>;
};

export default SignIn;
