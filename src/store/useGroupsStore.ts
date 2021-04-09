import create from "zustand";
import { combine } from "zustand/middleware";
import { Group } from "../entities/group/Group";

const useGroupsStore = create(
  combine(
    {
      groups: [] as Group[]
    },
    (set) => ({
      setGroups: (g: Group[]) => set((s) => ({ groups: g }))
    })
  )
);

export default useGroupsStore;
