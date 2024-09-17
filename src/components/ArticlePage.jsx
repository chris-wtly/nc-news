import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../requests";
import { Comments } from "./Comments";
import { patchArticleLike } from "../requests";
import { AddComment } from "./addComment";

export function ArticlePage() {
  const { article_id } = useParams();
  const [commentGroup, setCommentGroup] = useState([]);

  const [articleData, setArticleData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const [canLike, setCanlike] = useState(true);
  const [likeText, setLikeText] = useState("Like");

  useEffect(() => {
    fetchArticle(article_id).then(({ data: { articles } }) => {
      setArticleData(articles);
      setIsLoading(false);
      setLikes(articles.votes);
    });
  }, []);

  const handleLike = () => {
    if (canLike === true) {
      setCanlike(false);
      setLikes(likes + 1);
      setLikeText("Liked");
      patchArticleLike(article_id, { inc_votes: 1 }).catch((err) => {
        if (err) {
          setLikeText("Can't like post at this moment");
        }
      });
    } else {
      setCanlike(true);
      setLikes(likes - 1);
      setLikeText("Like");
      patchArticleLike(article_id, { inc_votes: -1 }).catch((err) => {
        if (err) {
          setLikeText("Can't like post at this moment");
        }
      });
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="article_page">
        <h1>{articleData.title}</h1>
        <h2>{articleData.author}</h2>
        <h3>{articleData.topic}</h3>
        <img className="img_card" src={articleData.article_img_url} />
        <article className="article">{articleData.body}</article>
        <button
          onClick={() => {
            handleLike();
          }}
        >
          {likeText} {likes}
        </button>
      </div>
      <AddComment
        article_id={article_id}
        commentGroup={commentGroup}
        setCommentGroup={setCommentGroup}
      />
      <Comments
        article_id={article_id}
        commentGroup={commentGroup}
        setCommentGroup={setCommentGroup}
      />
    </>
  );
}
