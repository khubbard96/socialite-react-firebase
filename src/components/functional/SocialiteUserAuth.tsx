import React, { useEffect } from "react";
import getFirestoreAndAuth from "../../util/FirebaseService";
import useAuth from "../../store/useAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import useFirestore from "../../store/useFirestore";
import useMe from "../../store/useMe";
import firebase from "firebase/app";
import MainLogin from "../login/MainLogin";
/**
 * Component to initialize firebase auth
 * and connection before doing anything
 * else
 * @param param0
 */
const SocialiteUserAuth: React.FC = ({ children }) => {
    const { fs, auth } = getFirestoreAndAuth();
    const setAuth = useAuth((state) => state.setAuth);
    setAuth(auth);

    const setFirestore = useFirestore((state) => state.setFirestore);
    const socialiteFs = useFirestore((state) => state.fs);
    setFirestore(fs);

    const [user] = useAuthState(auth);
    const { setMe } = useMe();
    useEffect(() => {
        setMe(user || null);
    }, [user]);

    if (
        user &&
        socialiteFs &&
        socialiteFs !== ({} as firebase.firestore.Firestore)
    ) {
        console.log("user authed and fs available.");
        return <>{children}</>;
    } else {
        return (<MainLogin />);
    }
};

const SignIn:React.FC = () => {

    const auth = useAuth(state=>state.auth);
    //const [user] = useAuthState(auth);

    const signIn = () => {
        auth?.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    return(
        <button onClick={signIn}>Sign in</button>
    );
}

export default SocialiteUserAuth;
