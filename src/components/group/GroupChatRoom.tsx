import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { Group } from "../../entities/group/Group";
import useMessages from "../../store/useMessages";

const GroupChatListItem: React.FC<{
  sender: string;
  text: string;
}> = ({ children, sender, text }) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary={sender} secondary={text} />
      </ListItem>
    </>
  );
};

const GroupChatRoom: React.FC<{ group: Group }> = ({ children, group }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      overflowY: "scroll",
      paddingTop: 80,
      flexGrow: 1
    }
  }));
  const classes = useStyles();

  const messages = useMessages((state) => state.messages);

  return (
    <div className={classes.root}>
      <List>
        {messages.map((message, idx) => {
          if (idx === messages.length - 1) {
            return (
              <>
                <GroupChatListItem
                  sender={message.createdBy}
                  text={message.text}
                />
              </>
            );
          } else {
            return (
              <GroupChatListItem
                sender={message.createdBy}
                text={message.text}
              />
            );
          }
        })}
      </List>
    </div>
  );
};

export default GroupChatRoom;
