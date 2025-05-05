import "./post.scss";
interface PostProps {
    id: number;
    author: {
        picture: string;
        name: string;
        email: string;
    };
    message: string;
    deletePostById: (id: number) => void;
}
declare const Post: ({ id, author, message, deletePostById }: PostProps) => import("react/jsx-runtime").JSX.Element;
export default Post;
