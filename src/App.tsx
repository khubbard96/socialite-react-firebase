import React from "react";
import "./App.css";
import getFirestoreAndAuth from "./util/FirebaseService";
import useAuth from "./store/useAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/SignIn";
import useFirestore from "./store/useFirestore";
import useGroup from "./store/useGroup";
import useMe from "./store/useMe";
import SocialiteViewNavigator, { SocialiteApplicationViewComponent } from "./components/navigation/SocialiteViewNavigator";
import HomeView from "./components/navigation/HomeView";
import GroupView from "./components/navigation/GroupView";
import ApplicationViewType from "./components/navigation/ApplicationViewType";


const App: React.FC = () => {
    const { fs, auth } = getFirestoreAndAuth();
    const setAuth = useAuth((state) => state.setAuth);
    setAuth(auth);
    const setFirestore = useFirestore((state) => state.setFirestore);
    setFirestore(fs);

    const [user] = useAuthState(auth);
    const setMe = useMe((state) => state.setMe);

    if (user) setMe(user);

    return (
        <div className="App">
            {user ? (
                <SocialiteViewNavigator>
                    <SocialiteApplicationViewComponent viewType={ApplicationViewType.HOME}>
                        <HomeView />
                    </SocialiteApplicationViewComponent>
                    <SocialiteApplicationViewComponent viewType={ApplicationViewType.GROUP}>
                        <GroupView />
                    </SocialiteApplicationViewComponent>
                </SocialiteViewNavigator>
            ) : (
                <SignIn />
            )}
        </div>
    );
};

export default App;
