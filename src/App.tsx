import React from 'react';
import './App.css';
import initFirebase from "./util/initFirebase";
import useAuth from './store/useAuth';
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from './components/SignIn';
import useFirestore from './store/useFirestore';
import useGroup from './store/useGroup';
import GroupSelector from './components/GroupSelector';
import ChatRoom from './components/ChatRoom';
import useMe from './store/useMe';

const { fs, auth } = initFirebase();

const App:React.FC = () => {

  const setAuth = useAuth(state => state.setAuth);
  setAuth(auth);
  const setFirestore = useFirestore(state => state.setFirestore);
  setFirestore(fs);
  const [user] = useAuthState(auth);
  const setMe = useMe(state=>state.setMe);
  
  if(user) setMe(user);

  const currentGroupId = useGroup(state=>state.groupId);

  return (
    <div className="App">
      {user ?
      <>
        <h3>Welcome, {user.displayName}</h3>
        <GroupSelector />
      <p>You're viewing group {currentGroupId}</p>
      <ChatRoom />
      </>
        : <SignIn />}
    </div>
  );
}

export default App;
