import React from "react";
import { JsxElement } from "typescript";
import create from "zustand";
import { combine } from "zustand/middleware";
import SocialiteModalType from "../components/modal/SocialiteModal";

const getModalStoreDefault = ():Map<SocialiteModalType,JSX.Element> => {
    return new Map<SocialiteModalType,JSX.Element>();
}

const useModalStore = create(
    combine(
        {
            modals: getModalStoreDefault(),
            currentModal: "" as SocialiteModalType
        },
        (set, get) => ({
            addModal: (name: SocialiteModalType, modal: JSX.Element) => {
                const modals = get().modals;
                let newModals;
                if (!modals.has(name)) {
                    newModals = modals.set(name, modal)
                } else {
                    console.log(name + " is already registered");
                    newModals = modals
                }
                set({
                    modals: newModals
                })
            },
            removeModal: (name: SocialiteModalType) => {
                const modals = get().modals;
                if (modals.has(name)) {
                    modals.delete(name);
                } else {
                    console.log(name + " did not match any registered modal.");
                }
                set({
                    modals
                })
            },
            setCurrentModal:(name:SocialiteModalType) => {
                const modals = get().modals;
                if(name === null) {
                    const currentModal = null;
                    set({currentModal});
                }
                else if(modals.has(name)) {
                    const currentModal = name;
                    set({currentModal});
                } else {
                    console.log("Could not set modal",name,"Did you register it?")
                }
            }
        })
    )
)

export default useModalStore;