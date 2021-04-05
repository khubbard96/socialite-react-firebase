import React, { useState } from "react";
import { useCollectionData, useDocumentData } from "react-firebase-hooks/firestore";
import useFirestore from "../store/useFirestore";
import useGroup from "../store/useGroup";
import useMe from "../store/useMe";
import useGroupThread from "../store/useGroupThread";

const ChatRoom: React.FC = () => {

    const fs = useFirestore(state => state.fs);
    const groupId = useGroup(state => state.groupId)
    const groupRef = fs.collection("groups").doc(groupId)

    const [group] = useDocumentData(groupRef);
    //const messagesRef = groupRef.collection("messages");
    const threadsRef = groupRef.collection("threads");
    //const [chat] = useCollectionData(messagesRef.orderBy("createdAt"));
    const chat = undefined;
    const [threads] = useCollectionData(threadsRef.orderBy("createdAt"));

    const threadId = useGroupThread(state=>state.threadId);
    

    return (
        <>
            {group ?
                <>
                    <h4>{group?.name}</h4>
                    <h6>Threads</h6>
                    {
                        threads ? 
                            threads?.length ?
                                threads?.map((thread,idx)=>{
                                    return <ThreadSelector id={thread.id}>#{thread.name}</ThreadSelector>
                                })
                            :
                                <div>This group contains no threads.</div>
                        :
                            <div>Loading...</div>
                    }

                    {/*
                        chat ?
                            chat?.length ?
                                chat?.map((msg: any, idx: number) => {
                                    return <ChatMessage key={idx} sender={msg.sender} text={msg.text} />
                                })
                                : <div>No messages yet!!</div>
                            :
                            <div>Loading...</div>

                            */}

                    <SendChat />
                </>
                : <div>No group!</div>
            }
        </>
    );
}

const ChatMessage: React.FC<{ sender: string, text: string }> = ({ sender, text }) => {
    return (
        <div>
            {sender}: {text}
        </div>
    )
}

const SendChat: React.FC = () => {

    const [message, setMessage] = useState("");
    const fs = useFirestore(state => state.fs);
    const groupId = useGroup(state => state.groupId);
    const groupRef = fs.collection("groups").doc(groupId);
    const me = useMe(state => state.me);


    const updateMessage = (e: any) => {
        setMessage(e.currentTarget.value);
    }

    const sendMessage = (e: any) => {
        e.preventDefault();
        if (message) {
            groupRef.collection("messages").add({ sender: me.displayName, text: message, createdAt: Date.now() })
        }
        setMessage("");
    }

    return (
        <>
            <form>
                <input placeholder="Send chat" value={message} onChange={updateMessage}></input>
                <button type="submit" onClick={sendMessage}>Send</button>
            </form>
        </>
    )
}

const ThreadSelector:React.FC<{id:string}> = ({id,children}) => {

    const setThreadId = useGroupThread(state=>state.setThreadId)

    const changeThread = () => {
        setThreadId(id)
    }

    return(
        <button onClick={changeThread}>{children}</button>
    )
}

export default ChatRoom;