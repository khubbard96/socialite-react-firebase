import create from "zustand";
import { combine } from "zustand/middleware";
import ApplicationViewType from "../components/navigation/ApplicationViewType"

const useApplicationView = create(
    combine(
        {
            view: ApplicationViewType.HOME,
            viewId: 0
        },
        (set)=>({
            setAppView:(_v: ApplicationViewType) =>
                set((s)=>({view:_v})),
            setAppViewId:(_id:number)=>
                set((s)=>({viewId:_id}))
        })
    )
);

export default useApplicationView;