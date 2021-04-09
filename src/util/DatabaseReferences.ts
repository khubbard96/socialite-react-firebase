import firebase from "firebase/app";
import useFirestore from "../store/useFirestore";

/*
  entity imports
*/

import { Group, GroupMessage } from "../entities/group/Group";

/*
  reference definitions.
*/

const fs = useFirestore.getState().fs;

type DocumentRef = firebase.firestore.DocumentReference;
type CollectionRef = firebase.firestore.CollectionReference;

interface SocialiteDataReference<T, R = DocumentRef | CollectionRef> {
  docData: (...args: any[]) => R;
  mapToEntity: (...args: any[]) => T;
}

export const GroupsReference: SocialiteDataReference<Group[], CollectionRef> = {
  docData: () =>
    fs?.collection ? fs.collection("groups") : ({} as CollectionRef),
  mapToEntity: () => [] as Group[]
};

export const GroupReference: SocialiteDataReference<Group> = {
  docData: (gid: string) => fs.collection("groups").doc(gid),
  mapToEntity: () => ({} as Group)
};

export const MessagesReference: SocialiteDataReference<
  GroupMessage[],
  CollectionRef
> = {
  docData: (gid: string) =>
    fs.collection("groups").doc(gid).collection("messages"),
  mapToEntity: () => [] as GroupMessage[]
};
