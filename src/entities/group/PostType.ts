export interface Post {
  sender: string;
  createdAt: number;
  threadId: string;
  type: PostType;
}

export interface MessagePost extends Post {
  text: string;
}

export interface ReplyPost extends MessagePost {
  replyTo: string;
}

export interface EventPost extends Post {
  title: string;
  location: string;
  time: number;
  tz: string;
  details: string;
  people: {
    invited: string[];
    going: string[];
    notGoing: string[];
  };
}

export type PostType = "MESSAGE" | "REPLY" | "EVENT" | "THREAD_INVITE";
