import create from "zustand";
import {combine} from "zustand/middleware";

const useGroupThread = create(
    combine(
        {
            threadId:"main"
        },
        (set)=> ({
            setThreadId:(tid:string)=>set((s)=>({threadId:tid}))
        })
    )
);
export default useGroupThread;