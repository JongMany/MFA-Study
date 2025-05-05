import { PostType, UserType } from "./types";
export declare function getPosts(token: string): Promise<PostType[]>;
export declare function createPost(token: string, body: {
    message: string;
}): Promise<void>;
export declare function removePost(token: string, id: number): Promise<void>;
export declare function getUser(token: string): Promise<UserType>;
