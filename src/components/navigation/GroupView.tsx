import React from "react";
import useGroup from "../../store/useGroup";
import GroupTitleBar from "../group/GroupTitleBar";
import GroupChatRoom from "../group/GroupChatRoom";
import SendMessageForm from "../group/SendMessageForm";
import useFirestore from "../../store/useFirestore";
import {
  useCollectionData,
  useDocumentData
} from "react-firebase-hooks/firestore";
import { Group } from "../../entities/group/Group";
import { Divider, makeStyles } from "@material-ui/core";

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

  const fs = useFirestore((state) => state.fs);
  const groupRef = fs.collection("groups").doc(groupId);
  const [group] = useDocumentData(groupRef);
  const [messages] = useCollectionData(
    groupRef.collection("messages").orderBy("createdAtUtc"),
    {
      idField: "id"
    }
  );

  const _group: Group = {
    id: group?.id,
    title: group?.title,
    avatar: "",
    preview: "No preview available.",
    createdAt: group?.createdAtUtc,
    messages: [],
    createdBy: group?.createdBy
  };

  messages?.forEach((msg) => {
    _group.messages.push({
      text: msg.text,
      createdAt: new Date(),
      createdBy: msg.createdBy
    });
  });

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
