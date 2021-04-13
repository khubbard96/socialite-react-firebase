import React from "react";
import useAuth from "../../store/useAuth";
import useMe from "../../store/useMe";
import GroupsView from "../home/groups/GroupsView";
import HomeNavBar from "../home/HomeNavBar";

const HomeView: React.FC = () => {
    const auth = useAuth((state)=>state.auth);
    const me = useMe((state)=>state.me);

    const signOut = () => {
        auth?.signOut();
    }
    return (
        <>
            <HomeNavBar />
            <GroupsView />
            <button onClick={signOut}>Sign Out, {me?.displayName || ""}</button>
        </>
    )
}

export default HomeView;