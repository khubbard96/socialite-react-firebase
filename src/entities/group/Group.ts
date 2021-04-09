import { SocialiteEntity } from "../socialite/SocialiteEntity";
import ConvertableDataType, {
  SocialiteFirebaseData
} from "../converter/ConvertableDataType";

export class Group implements SocialiteEntity, ConvertableDataType<Group> {
  id: string = "";
  title: string = "";
  avatar?: string = "";
  preview: string = "";
  messages: GroupMessage[] = [];
  createdAt = new Date();
  createdBy = "";
  convertToModel = (data: SocialiteFirebaseData) => {
    this.id = data.id;
    this.title = data.title;
    this.avatar = data.avatar;
    this.preview = data.preview;
    this.createdAt = data.createdAt;
    this.createdBy = data.createdBy;
    return this;
  };
}

export interface GroupMessage extends SocialiteEntity {
  text: string;
}
