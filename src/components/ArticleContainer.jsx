import { useEffect, useState } from "react";
import { fetchArticles } from "../requests";
import { ArticleCard } from "./ArticleCard";
import { ErrorLoading } from "./ErrorPage";

export function ArticleContainer({ searchParams, setIsErr }) {
  const [articleCards, setArticleCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const topicQuery = searchParams.get("topic");
  const sortQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  useEffect(() => {
    fetchArticles({
      topic: topicQuery,
      sort_by: sortQuery,
      order: orderQuery,
    })
      .then(({ data: { articles } }) => {
        if (sortQuery === "votes" || sortQuery === "dates") {
          articles.reverse();
        }
        setArticleCards(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err) {
          setIsErr(true);
        }
      });
  }, [topicQuery, sortQuery, orderQuery]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <ArticleCard articleCards={articleCards} />;
}
