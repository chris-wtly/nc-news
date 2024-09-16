import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../requests";
import { Comments } from "./Comments";

export function ArticlePage() {
  const { article_id } = useParams();

  const [articleData, setArticleData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticle(article_id).then(({ data: { articles } }) => {
      setArticleData(articles);
      setIsLoading(false);
    });
  }, []);

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
        <button>Like {articleData.votes}</button>
      </div>
      <Comments article_id={article_id} />
    </>
  );
}
