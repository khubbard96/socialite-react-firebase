import React from "react";
import useAuth from "../../../store/useAuth";
import useMe from "../../../store/useMe";
import GroupsView from "../../home/groups/GroupsView";
import HomeNavBar from "../../home/HomeNavBar";

const HomeView: React.FC = () => {
  const { auth, setAuth } = useAuth();
  const { me, setMe } = useMe();

  const signOut = () => {
    auth?.signOut();
    setAuth(null);
  };
  return (
    <>
      <HomeNavBar />
      <GroupsView />
      <button onClick={signOut}>Sign Out, {me?.displayName || ""}</button>
    </>
  );
};

export default HomeView;
