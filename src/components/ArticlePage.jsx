import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../requests";

export function ArticlePage() {
  const { article_id } = useParams();

  const [articleData, setArticleData] = useState({});

  useEffect(() => {
    fetchArticle(article_id).then(({ data: { articles } }) => {
      setArticleData(articles);
    });
  }, []);
  return (
    <>
      <div className="article_page">
        <h1>{articleData.title}</h1>
        <h2>{articleData.author}</h2>
        <h3>{articleData.topic}</h3>
        <img src={articleData.article_img_url} />
        <article>{articleData.body}</article>
        <button>Like {articleData.votes}</button>
        <button>Comments {articleData.comment_count}</button>
      </div>
    </>
  );
}
