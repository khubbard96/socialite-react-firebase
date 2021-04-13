import React from "react";
import useCurrentModal from "../../store/useCurrentModal";
import useModalStore from "../../store/useModalStore";

type SocialiteModalType = 
    "CREATE_GROUP" | 
    "EDIT_GROUP" |
    null

export default SocialiteModalType;

export const openSocialiteModal = (name:SocialiteModalType) => {
    useModalStore.getState().setCurrentModal(name);
}

export const subscribeModal = (name:SocialiteModalType,modal:JSX.Element) => {
    useModalStore.getState().addModal(name,modal);
    return () => {useModalStore.getState().removeModal(name)}
}