import styles from "./Post.module.css";

import PostComments from "../PostComments";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  imageUrl: string;
};

const Post = ({ children, imageUrl }: Props) => (
  <div className={styles.post} data-testid="post">
    <img
      className={styles["post-image"]}
      src={imageUrl}
      data-testid="post-image"
    />
    <p className={styles["post-text"]} data-testid="post-text">
      {" "}
      {children}{" "}
    </p>
    <PostComments data-testid="post-comments" />
  </div>
);

export default Post;
