import firebase from "firebase/app";

var fs: firebase.firestore.Firestore | null;

type DocumentRef = firebase.firestore.DocumentReference | undefined;
type CollectionRef = firebase.firestore.CollectionReference | undefined;

type References = {
  getGroupReference: (id: string) => DocumentRef;
  getGroupsReference: () => CollectionRef;
  getMessagesReference: (gid: string) => CollectionRef;
};

const getGroupsReference = (): CollectionRef => {
  return fs?.collection("groups");
};

const getGroupReference = (id: string): DocumentRef => {
  return fs?.collection("groups").doc(id);
};

const getMessagesReference = (gid: string): CollectionRef => {
  return fs?.collection("groups").doc(gid).collection("messages");
};

const dbRef = (_fs: firebase.firestore.Firestore | null): References | null => {
  fs = _fs;
  if (fs && fs !== ({} as firebase.firestore.Firestore)) {
    return {
      getGroupsReference,
      getGroupReference,
      getMessagesReference
    };
  } else {
    return null;
  }
};

export default dbRef;
