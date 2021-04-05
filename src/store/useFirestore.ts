import create from "zustand";
import { combine } from "zustand/middleware";
import firebase from "firebase/app";

const useFirestore = create(
    combine(
        {
            fs: {} as firebase.firestore.Firestore
        },
        (set) => ({
            setFirestore: (_fs: firebase.firestore.Firestore) =>
                set((s) => ({ fs: _fs }))
        })
    )
);

export default useFirestore;