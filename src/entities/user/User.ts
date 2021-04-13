import {SocialiteEntity} from "../socialite/SocialiteEntity";

export interface SocialiteUser extends SocialiteEntity {
    defaultDisplayName:string;
    email:string;//TODO
    lastLogin:Date
}