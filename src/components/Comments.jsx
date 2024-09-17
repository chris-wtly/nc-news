import { useEffect, useState } from "react";
import { fetchComments } from "../requests";

export function Comments({ article_id }) {
  const [commentGroup, setCommentGroup] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchComments(article_id).then(({ data: { comments } }) => {
      setCommentGroup(comments);
      setIsLoading(false);
    });
  }, []);

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
          </div>
        );
      })}
    </div>
  );
}
