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
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Badge,
  makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";

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

  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1
    }
  }));

  const classes = useStyles();

  return (
    <div className="App">
      {user ? (
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Socialite</Typography>
              <div className={classes.grow}></div>
              <div>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <GroupsView />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default App;
