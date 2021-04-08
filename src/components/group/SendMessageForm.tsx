import { Input, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { GroupMessage } from "../../entities/group/Group";
import useFirestore from "../../store/useFirestore";
import useGroup from "../../store/useGroup";
import useMe from "../../store/useMe";

const SendMessageForm: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%"
    }
  }));

  const classes = useStyles();

  const [message, setMessage] = useState("");
  const fs = useFirestore((state) => state.fs);
  const groupId = useGroup((state) => state.groupId);
  const groupRef = fs.collection("groups").doc(groupId);
  const me = useMe((state) => state.me);

  const updateMessage = (e: any) => {
    setMessage(e.currentTarget.value);
  };

  const sendMessage = (e: any) => {
    e.preventDefault();

    const theMessage: GroupMessage = {
      text: message,
      createdAtUtc: new Date(),
      createdBy: me.displayName || ""
    };

    if (message) {
      groupRef.collection("messages").add(theMessage);
    }
    setMessage("");
  };

  return (
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
      />
    </form>
  );
};

export default SendMessageForm;
