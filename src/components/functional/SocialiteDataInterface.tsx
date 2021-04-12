import React from "react";
import useGroupsStore from "../../store/useGroupsStore";
import useMessages from "../../store/useMessages";
import {
  useCollectionData,
  useDocumentData
} from "react-firebase-hooks/firestore";
import { Group, GroupMessage } from "../../entities/group/Group";
import dbRef from "../../util/DatabaseReferences2";
import useFirestore from "../../store/useFirestore";
import { plainToClass } from "class-transformer";
import useGroup from "../../store/useGroup";

const SocialiteDataInterface: React.FC = () => {
  const fs = useFirestore((state) => state.fs);

  const [groups] = useCollectionData<Group>(dbRef(fs)?.getGroupsReference(), {
    idField: "id",
    transform: (val: any): Group => {
      return plainToClass(Group, val);
    }
  });

  useGroupsStore.getState().setGroups(groups || []);

  const currentGroupId = useGroup((state) => state.groupId);
  console.log("current group id", currentGroupId);
  const [messages] = useCollectionData<GroupMessage>(
    dbRef(fs)?.getMessagesReference(currentGroupId)?.orderBy("createdAt"),
    {
      idField: "id",
      transform: (val: any): GroupMessage => {
        return plainToClass(GroupMessage, val);
      }
    }
  );

  useMessages.getState().setGroupMessages(messages || []);

  return <></>;
};

export default SocialiteDataInterface;
