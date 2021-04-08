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

  const latestMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [group.messages]);

  return (
    <div className={classes.root}>
      <List>
        {group.messages.map((message, idx) => {
          if (idx === group.messages.length - 1) {
            return (
              <>
                <div ref={latestMessageRef}></div>
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
