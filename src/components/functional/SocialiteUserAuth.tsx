import React from "react";
import getFirestoreAndAuth from "../../util/FirebaseService";
import useAuth from "../../store/useAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import useFirestore from "../../store/useFirestore";
import useMe from "../../store/useMe";
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
  const { me, setMe } = useMe();
  //setMe(user || null);

  if (user && socialiteFs?.collection) {
    return <>{children}</>;
  } else {
    return <>you aren't authenticated...</>;
  }
};

export default SocialiteUserAuth;
