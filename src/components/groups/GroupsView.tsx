import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Group } from "../../entities/group/Group";
import useFirestore from "../../store/useFirestore";
import FavoriteGroupsList from "./FavoriteGroupsList";
import GroupList from "./GroupList";

/*
  things that the GroupsView needs

  -list of visible groups
    -group title
    -group avi
    -preview message
    -unread posts badge

  -favorite groups
    -group title
    -group avi
    -unread posts badge

*/

const GroupsView: React.FC = () => {
  const fs = useFirestore((state) => state.fs);
  const groupsRef = fs.collection("groups");
  const [_groups] = useCollectionData(groupsRef);
  const groups: Group[] = [];

  _groups?.forEach((group, idx) => {
    const _group = {} as Group;
    _group.title = group.name;
    _group.avatar = "";
    _group.preview = "no preview available.";
    groups.push(_group);
  });

  return (
    <>
      <FavoriteGroupsList containedGroups={groups} />
      <GroupList containedGroups={groups} />
      {/* TODO: dm's */}
    </>
  );
};

export default GroupsView;
