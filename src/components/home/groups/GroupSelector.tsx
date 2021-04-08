import React from "react";
import { Group } from "../../../entities/group/Group";
import useApplicationView from "../../../store/useApplicationView";
import useGroup from "../../../store/useGroup";
import ApplicationViewType from "../../navigation/ApplicationViewType";

const GroupSelector: React.FC<{ group: Group }> = ({ children, group }) => {
  const setViewId = useApplicationView((state) => state.setAppViewId);
  const setGroupId = useGroup((state) => state.setGroupId);

  const handleSelectGroup = () => {
    setGroupId(group.id);
    setViewId(ApplicationViewType.GROUP);
  };

  return <div onClick={handleSelectGroup}>{children}</div>;
};

export default GroupSelector;
