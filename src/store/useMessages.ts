import create from "zustand";
import { combine } from "zustand/middleware";
import { GroupMessage } from "../entities/group/Group";

const useMessages = create(
  combine(
    {
      messages: [] as GroupMessage[]
    },
    (set) => ({
      setGroupMessages: (msgs: GroupMessage[]) =>
        set((s) => ({
          messages: msgs
        }))
    })
  )
);
export default useMessages;
