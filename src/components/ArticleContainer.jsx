import { useEffect, useState } from "react";
import { fetchArticles } from "../requests";
import { ArticleCard } from "./ArticleCard";
import { Link } from "react-router-dom";

export function ArticleContainer() {
  const [articleCards, setArticleCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then(({ data: { articles } }) => {
      setArticleCards(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <ArticleCard articleCards={articleCards} />;
}
