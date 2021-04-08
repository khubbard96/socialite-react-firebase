import React from "react";
import { Group } from "../../../entities/group/Group";
import useApplicationView from "../../../store/useApplicationView";
import ApplicationViewType from "../../navigation/ApplicationViewType";

const GroupSelector:React.FC<{group:Group}> = ({children, group}) => {

    const setViewId = useApplicationView((state)=>state.setAppViewId);

    const handleSelectGroup = () => {
        setViewId(ApplicationViewType.GROUP);
    }

    return(
        <div onClick={handleSelectGroup}>
            {children}
        </div>
    );
}

export default GroupSelector;