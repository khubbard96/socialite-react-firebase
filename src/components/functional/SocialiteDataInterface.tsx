import React from "react";
import { GroupsReference } from "../../util/DatabaseReferences";
import useGroupsStore from "../../store/useGroupsStore";
import {
  useCollectionData,
  useDocumentData
} from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import { Group } from "../../entities/group/Group";

const SocialiteDataInterface: React.FC = () => {
  const [_groups] = useCollectionData(GroupsReference.docData(), {
    idField: "id"
  });
  const groups: Group[] = [];
  _groups?.forEach((_group: firebase.firestore.DocumentData) => {
    groups.push(new Group().convertToModel(_group));
  });
  useGroupsStore.getState().setGroups(groups);

  return <></>;
};

export default SocialiteDataInterface;
