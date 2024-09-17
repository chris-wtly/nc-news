import { useEffect, useState } from "react";
import { postComment } from "../requests";

export function AddComment({ article_id, setCommentGroup, commentGroup }) {
  const [comment, setComment] = useState({ author: "grumpy19", body: "" });
  const [commentBody, setCommentBody] = useState("");
  const [errComment, setErrComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setComment({ author: "grumpy19", body: commentBody });
  };

  useEffect(() => {
    if (comment.author !== "" && comment.body !== "") {
      postComment(article_id, comment)
        .then(({ data: { comment_posted } }) => {
          setCommentGroup([...commentGroup, comment_posted]);
          setErrComment("");
        })
        .catch(() => {
          setErrComment(
            "Error posting comment, please make sure your username is correct"
          );
        });
    }
  }, [comment]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="YourCommentHere..."
          required
          value={commentBody}
          type="Text"
          onChange={(event) => {
            setCommentBody(event.target.value);
          }}
        />
        <p>{errComment}</p>
        <button value={comment} type="submit" />
      </form>
    </div>
  );
}
