import { useEffect, useState } from "react";
import { fetchComments } from "../requests";
import { DeleteKey } from "./DeleteKey";
import { ErrorLoading } from "./ErrorPage";

export function Comments({ article_id, commentGroup, setCommentGroup }) {
  const [isLoading, setIsLoading] = useState(true);
  const [errComment, setCommentErr] = useState(false);

  useEffect(() => {
    fetchComments(article_id)
      .then(({ data: { comments } }) => {
        setCommentGroup(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err) {
          setIsLoading(false);
          setCommentErr(true);
        }
      });
  }, []);

  if (errComment) {
    return <ErrorLoading />;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Comments</h3>
      {commentGroup.map((comment) => {
        return (
          <div key={comment.comment_id} className="comment">
            <h4>Posted by {comment.author}</h4>
            <article>{comment.body}</article>
            <h5> Posted {comment.created_at}</h5>
            <button>Likes {comment.votes}</button>
            <DeleteKey
              author={comment.author}
              comment_id={comment.comment_id}
            />
          </div>
        );
      })}
    </div>
  );
}
