import { SocialiteEntity } from "../socialite/SocialiteEntity";

export class GroupMessage implements SocialiteEntity {
  text: string = "";
  createdAt = new Date();
  createdBy = "";
}

export class Group implements SocialiteEntity {
  id: string = "";
  title: string = "";
  avatar?: string = "";
  preview: string = "";
  messages: GroupMessage[] = [];
  createdBy = "";
  createdAt = new Date();
}
