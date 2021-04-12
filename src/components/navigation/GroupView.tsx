import React from "react";
import useGroup from "../../store/useGroup";
import GroupTitleBar from "../group/GroupTitleBar";
import GroupChatRoom from "../group/GroupChatRoom";
import SendMessageForm from "../group/SendMessageForm";
import { Group } from "../../entities/group/Group";
import { Divider, makeStyles } from "@material-ui/core";
import useGroupsStore from "../../store/useGroupsStore";

/**
 * consists of:
 *  -group title bar
 *  -group chat room
 *  -send message form
 */
const GroupView: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }));
  const classes = useStyles();

  const groupId = useGroup((state) => state.groupId);
  const _group: Group =
    useGroupsStore((state) =>
      state.groups.find((group) => group.id === groupId)
    ) || ({} as Group);

  return (
    <div className={classes.root}>
      <GroupTitleBar group={_group} />
      <GroupChatRoom group={_group} />
      <Divider />
      <SendMessageForm />
    </div>
  );
};

export default GroupView;
