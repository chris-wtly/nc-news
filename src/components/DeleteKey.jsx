import { UserContext } from "./user";
import { useContext, useEffect, useState } from "react";
import { deleteComment } from "../requests";

export function DeleteKey({ author, comment_id }) {
  const [deleteNotification, setDeleteNotification] = useState("");
  const [deleteCommentBoolean, setDeleteCommentBoolean] = useState(false);
  useEffect(() => {
    if (deleteCommentBoolean) {
      deleteComment(comment_id)
        .then(() => {
          setDeleteNotification("Comment deleted");
        })
        .catch((err) => {
          console.log("here");
          if (err) {
            setDeleteNotification("Couldn''t delete your comment at this time");
          }
        });
    }
  }, [deleteCommentBoolean]);

  const { user } = useContext(UserContext);
  if (author === user) {
    return (
      <>
        <button
          onClick={() => {
            setDeleteCommentBoolean(true);
          }}
        >
          Delete
        </button>
        <p className="del">{deleteNotification}</p>
      </>
    );
  } else {
    return null;
  }
}
