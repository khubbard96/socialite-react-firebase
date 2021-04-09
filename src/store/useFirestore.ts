import create from "zustand";
import { combine } from "zustand/middleware";
import firebase from "firebase/app";

const useFirestore = create(
  combine(
    {
      fs: {} as firebase.firestore.Firestore | null
    },
    (set) => ({
      setFirestore: (_fs: firebase.firestore.Firestore | null) =>
        set((s) => ({ fs: _fs }))
    })
  )
);

export default useFirestore;
