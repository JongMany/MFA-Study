import "./write-post.scss";
import React from "react";
interface WritePostProps {
    writePost: (message: string) => Promise<void>;
}
declare const WritePost: React.FC<WritePostProps>;
export default WritePost;
