import React from "react";
import GroupsView from "../home/groups/GroupsView";
import HomeNavBar from "../home/HomeNavBar";

const HomeView: React.FC = () => {
    return (
        <>
            <HomeNavBar />
            <GroupsView />
        </>
    )
}

export default HomeView;