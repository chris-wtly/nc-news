import { useEffect, useState } from "react";
import { fetchArticles } from "../requests";
import { ArticleCard } from "./ArticleCard";
import { Link, useSearchParams } from "react-router-dom";

export function ArticleContainer() {
  const [articleCards, setArticleCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const topicQuery = searchParams.get("topic");

  //console.log(topicQuery);

  //this console log fires twice for some reason, first when the page loads, then the fetch request goes thorugh after clicking a nav link, then the console log fires once more. I'm not sure why.

  useEffect(() => {
    fetchArticles({ topic: topicQuery }).then(({ data: { articles } }) => {
      setArticleCards(articles);
      setIsLoading(false);
    });
  }, [topicQuery]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <ArticleCard articleCards={articleCards} />;
}
