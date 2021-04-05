import create from "zustand";
import {combine} from "zustand/middleware";
import firebase from "firebase/app";

const useMe = create(
    combine(
        {
            me: {} as firebase.User,
        },
        (set)=>({
            setMe: (_me:firebase.User)=>set((s)=>({me:_me}))
        })
    )
);

export default useMe;