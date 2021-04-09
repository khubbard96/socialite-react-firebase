import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Group } from "../../../entities/group/Group";
import useFirestore from "../../../store/useFirestore";
import useGroupsStore from "../../../store/useGroupsStore";
import FavoriteGroupsList from "./FavoriteGroupsList";
import GroupList from "./GroupList";
import { Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useCurrentModal from "../../../store/useCurrentModal";

/*
  things that the GroupsView needs

  -list of visible groups
    -group title
    -group avi
    -preview message
    -unread posts badge

  -favorite groups
    -group title
    -group avi
    -unread posts badge

*/

const GroupsView: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    fab: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  const groups: Group[] = useGroupsStore((state) => state.groups);

  const setModal = useCurrentModal((state) => state.setCurrentModal);
  const openCreateGroupModal = () => {
    setModal("CREATE_GROUP");
  };

  return (
    <>
      <FavoriteGroupsList containedGroups={groups} />
      <GroupList containedGroups={groups} />
      {/* TODO: dm's */}
      <Fab
        className={classes.fab}
        color="primary"
        aria-label="add"
        onClick={openCreateGroupModal}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default GroupsView;
