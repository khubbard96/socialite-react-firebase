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
            flexGrow: 1,
            paddingTop: 40,
            marginBottom: 30
        }
    }));
    const classes = useStyles();

    const messages = useMessages((state) => state.messages);

    const listContainerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        listContainerRef.current?.scrollTo({
            top: listRef.current?.offsetHeight,
            behavior: "smooth"
        });
    }, [messages]);

    return (
        <div className={classes.root} ref={listContainerRef}>
            <div ref={listRef}>
                <List>
                    {messages.slice(-25).map((message, idx) => {
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

        </div>
    );
};

export default GroupChatRoom;
