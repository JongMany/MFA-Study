import { User } from "@auth0/auth0-spa-js";

export interface AuthorType {
  email: string;
  name: string;
  picture: string;
}
export interface PostType {
  id: number;
  message: string;
  createdAt: string;
  author: AuthorType;
}

export interface UserType extends User {
  view_count: number;
  update_count: number;
}
