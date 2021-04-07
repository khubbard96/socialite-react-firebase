import React from "react";
import "./App.css";
import getFirestoreAndAuth from "./util/FirebaseService";
import useAuth from "./store/useAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/SignIn";
import useFirestore from "./store/useFirestore";
import useGroup from "./store/useGroup";
import GroupSelector from "./components/GroupSelector";
import ChatRoom from "./components/ChatRoom";
import useMe from "./store/useMe";
import GroupsView from "./components/groups/GroupsView";

const App: React.FC = () => {
  const { fs, auth } = getFirestoreAndAuth();
  const setAuth = useAuth((state) => state.setAuth);
  setAuth(auth);
  const setFirestore = useFirestore((state) => state.setFirestore);
  setFirestore(fs);

  const [user] = useAuthState(auth);
  const setMe = useMe((state) => state.setMe);

  if (user) setMe(user);

  const currentGroupId = useGroup((state) => state.groupId);

  return (
    <div className="App">
      {user ? (
        <div>
          <div>
            <h3>Welcome, {user.displayName}</h3>
            <GroupsView />
          </div>
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default App;
