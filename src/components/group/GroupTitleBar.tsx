import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Group } from "../../entities/group/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import useApplicationView from "../../store/useApplicationView";
import ApplicationViewType from "../navigation/ApplicationViewType";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { openSocialiteModal } from "../modal/SocialiteModal";

const GroupTitleBar: React.FC<{ group: Group }> = ({ children, group }) => {
  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1
    }
  }));

  const classes = useStyles();

  const setViewId = useApplicationView((state) => state.setAppViewId);
  const handleClickBack = () => {
    setViewId(ApplicationViewType.HOME);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <div>
          <IconButton color="inherit">
            <ArrowBackIcon onClick={handleClickBack} />
          </IconButton>
        </div>
        <Typography variant="h6">{group.title}</Typography>
        <div className={classes.grow}></div>
        <div>
          <IconButton color="inherit" onClick={()=>openSocialiteModal("EDIT_GROUP")}>
            <SettingsIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default GroupTitleBar;
