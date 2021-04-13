import { Divider, Input, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { GroupMessage } from "../../entities/group/Group";
import useFirestore from "../../store/useFirestore";
import useGroup from "../../store/useGroup";
import useMe from "../../store/useMe";
import { classToPlain } from "class-transformer";
import BottomSticky from "../general/BottomSticky";

const SendMessageForm: React.FC = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: "100%",
            background:"#fff",
        },
        input: {
            width:"95%",
            margin: "0 auto"
        }
    }));

    const classes = useStyles();

    const [message, setMessage] = useState("");
    const fs = useFirestore((state) => state.fs);
    const groupId = useGroup((state) => state.groupId);
    const groupRef = fs?.collection("groups").doc(groupId);
    const me = useMe((state) => state.me);

    const updateMessage = (e: any) => {
        setMessage(e.currentTarget.value);
    };

    const sendMessage = (e: any) => {
        e.preventDefault();

        const theMessage = new GroupMessage();
        console.log(message);
        theMessage.text = message;
        theMessage.createdAt = new Date();
        console.log(me);
        theMessage.createdBy = me?.displayName || "";

        if (message) {
            groupRef?.collection("messages").add(classToPlain(theMessage));
        }
        setMessage("");
    };

    return (
        <BottomSticky>
            <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={sendMessage}
            >
                <Input
                    placeholder="Send message..."
                    inputProps={{ "aria-label": "description" }}
                    onChange={updateMessage}
                    value={message}
                    className={classes.input}
                />
            </form>
        </BottomSticky>
    );
};

export default SendMessageForm;
