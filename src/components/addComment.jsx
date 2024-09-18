import { useEffect, useState } from "react";
import { postComment } from "../requests";

export function AddComment({ article_id, setCommentGroup, commentGroup }) {
  const [comment, setComment] = useState({ author: "grumpy19", body: "" });
  const [commentBody, setCommentBody] = useState("");
  const [errComment, setErrComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setComment({ author: "grumpy19", body: commentBody });
  };

  useEffect(() => {
    if (comment.author !== "" && comment.body !== "") {
      setIsPosting(true);
      postComment(article_id, comment)
        .then(({ data: { comment_posted } }) => {
          setCommentGroup([comment_posted, ...commentGroup]);
          setErrComment("");
          setIsPosting(false);
        })
        .catch((err) => {
          if (err) {
            setIsPosting(false);
            setErrComment(
              "Error posting comment, please make sure your username is correct"
            );
          }
        });
    }
  }, [comment]);

  if (isPosting) {
    return <p>Sending Comment</p>;
  }

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
        <button value={comment} type="submit">
          Comment
        </button>
      </form>
    </div>
  );
}
