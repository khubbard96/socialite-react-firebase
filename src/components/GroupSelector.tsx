import React from "react";
import useFirestore from "../store/useFirestore";
import useGroup from "../store/useGroup";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import useGroupThread from "../store/useGroupThread";

const GroupSelector: React.FC = () => {

    const fs = useFirestore(state => state.fs);
    const groupsRef = fs.collection('groups');

    const [groups] = useCollectionData(groupsRef, {idField: "id"});

    return (
        <>
            <h6>Here are your groups</h6>
            {groups?.map((group, idx) => {
                return <GroupSelectorButton key={idx} id={group.id}>{group.name}</GroupSelectorButton>
            })}
        </>
    )
}

const GroupSelectorButton: React.FC<{ id: string }> = ({ id, children }) => {

    const setGroupId = useGroup(state => state.setGroupId);
    const setGroupThread = useGroupThread(state=>state.setThreadId);

    const setGroup = () => {
        setGroupId(id);
        setGroupThread("main");
    }

    return (
        <button onClick={setGroup}>{children}</button>
    )
}

export default GroupSelector