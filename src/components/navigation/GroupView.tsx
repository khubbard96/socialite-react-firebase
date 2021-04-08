import React from "react";
import useApplicationView from "../../store/useApplicationView";
import ApplicationViewType from "./ApplicationViewType";

const GroupView:React.FC = () => {

    const setViewId = useApplicationView((state)=>state.setAppViewId)

    const handleClickBack = () => {
        setViewId(ApplicationViewType.HOME);
    }

    return(
        <>
            hello!
            <button onClick={handleClickBack}>back</button>
        </>
    )
}

export default GroupView;