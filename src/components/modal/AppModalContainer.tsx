import React from "react";
import useCurrentModal from "../../store/useCurrentModal";
import CreateGroup from "./CreateGroup";
import SocialiteModal from "./SocialiteModal";

const AppModalContainer: React.FC = ({ children }) => {

    return(
    <>  
        {children}
        <CreateGroup />
    </>
    )
}

export default AppModalContainer;