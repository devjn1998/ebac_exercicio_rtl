import { FormEvent, useState } from "react";
import styles from "./PostComments.module.css";

import Comment from "../../models/Comment";

const PostComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [tempComment, setTempComment] = useState("");

  function handleAddComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newComment = new Comment(comments.length, tempComment);
    setTempComment("");
    setComments([...comments, newComment]);
  }

  return (
    <div>
      <form onSubmit={handleAddComment}>
        <input
          type="text"
          data-testid="comment-input"
          value={tempComment}
          onChange={(e) => setTempComment(e.target.value)}
          required
          className={styles["post-comments-form-textarea"]}
        />
        <button
          data-testid="submit-comment"
          type="submit"
          className={styles["post-comments-form-button"]}
        >
          Comentar
        </button>
      </form>
      <div>
        {comments.map((comment) => (
          <div
            key={comment.id}
            data-testid="comment-item"
            className={styles["post-comment"]}
          >
            <p className={styles["post-comment-content"]}>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostComments;
