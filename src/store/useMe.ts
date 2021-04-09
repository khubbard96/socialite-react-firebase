import create from "zustand";
import { combine } from "zustand/middleware";
import firebase from "firebase/app";

const useMe = create(
  combine(
    {
      me: {} as firebase.User | null
    },
    (set) => ({
      setMe: (_me: firebase.User | null) => set((s) => ({ me: _me }))
    })
  )
);

export default useMe;
