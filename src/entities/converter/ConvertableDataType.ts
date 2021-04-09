import firebase from "firebase/app";

export type SocialiteFirebaseData = firebase.firestore.DocumentData;

interface ConvertableDataType<T> {
  convertToModel: (data: SocialiteFirebaseData) => T;
}

export default ConvertableDataType;
