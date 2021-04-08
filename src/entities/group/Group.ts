import { SocialiteEntity } from "../socialite/SocialiteEntity";

export interface Group extends SocialiteEntity {
  id: string;
  title: string;
  avatar?: string;
  preview: string;
  messages: GroupMessage[];
}

export interface GroupMessage extends SocialiteEntity {
  text: string;
}
