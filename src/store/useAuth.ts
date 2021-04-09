import create from "zustand";
import { combine } from "zustand/middleware";
import firebase from "firebase/app";

const useAuth = create(
  combine(
    {
      auth: {} as firebase.auth.Auth | null
    },
    (set) => ({
      setAuth: (_a: firebase.auth.Auth | null) => set((s) => ({ auth: _a }))
    })
  )
);

export default useAuth;
