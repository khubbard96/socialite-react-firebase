import React from "react";
import "./App.css";
import SocialiteViewNavigator, {
  SocialiteApplicationViewComponent
} from "./components/navigation/SocialiteViewNavigator";
import HomeView from "./components/navigation/views/HomeView";
import GroupView from "./components/navigation/views/GroupView";
import SignInView from "./components/navigation/views/SignInView";
import ApplicationViewType from "./components/navigation/ApplicationViewType";

const App: React.FC = () => {
  return (
    <div className="App">
      <SocialiteViewNavigator>
        <SocialiteApplicationViewComponent
          viewType={ApplicationViewType.SIGNIN}
        >
          <SignInView />
        </SocialiteApplicationViewComponent>
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
