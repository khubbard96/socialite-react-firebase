import create from "zustand";
import { combine } from "zustand/middleware";
import SocialiteModalType from "../components/modal/SocialiteModal"

const useCurrentModal = create(
    combine(
        {
            modal: null as SocialiteModalType
        },
        (set)=> ({
            setCurrentModal: (_m: SocialiteModalType) => set((s) => ({ modal: _m }))
        })
    )
)

export default useCurrentModal;