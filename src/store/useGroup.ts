import create from "zustand";
import {combine} from "zustand/middleware";

const useGroup = create(
    combine(
        {
            groupId: "0"
        },
        (set)=>({
            setGroupId: (_id:string)=>set((s)=>({groupId:_id}))
        })
    )
)

export default useGroup;