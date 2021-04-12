import { Data } from "react-firebase-hooks/firestore/dist/firestore/types";
import create from "zustand";
import { combine } from "zustand/middleware";
import { Group } from "../entities/group/Group";

const useGroupsStore = create(
  combine(
    {
      groups: [] as Data<Group, "", "">[]
    },
    (set) => ({
      setGroups: (g: Data<Group, "", "">[]) => set((s) => ({ groups: g }))
    })
  )
);

export default useGroupsStore;
