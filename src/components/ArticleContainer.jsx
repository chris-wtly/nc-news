import { useEffect, useState } from "react";
import { fetchArticles } from "../requests";
import { ArticleCard } from "./ArticleCard";

export function ArticleContainer() {
  const [articleCards, setArticleCards] = useState([]);

  useEffect(() => {
    fetchArticles().then(({ data: { articles } }) => {
      setArticleCards(articles);
    });
  }, []);

  return <ArticleCard articleCards={articleCards} />;
}
