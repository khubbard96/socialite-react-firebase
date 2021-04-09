import React from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import useMe from "./store/useMe";
import SocialiteViewNavigator, {
  SocialiteApplicationViewComponent
} from "./components/navigation/SocialiteViewNavigator";
import HomeView from "./components/navigation/HomeView";
import GroupView from "./components/navigation/GroupView";
import ApplicationViewType from "./components/navigation/ApplicationViewType";

const App: React.FC = () => {
  return (
    <div className="App">
      <SocialiteViewNavigator>
        <SocialiteApplicationViewComponent viewType={ApplicationViewType.HOME}>
          <HomeView />
        </SocialiteApplicationViewComponent>
        <SocialiteApplicationViewComponent viewType={ApplicationViewType.GROUP}>
          <GroupView />
        </SocialiteApplicationViewComponent>
      </SocialiteViewNavigator>
    </div>
  );
};

export default App;
