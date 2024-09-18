import { ArticleContainer } from "./ArticleContainer";
import { HomeNav } from "./HomeNav";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isErr, setIsErr] = useState(false);

  if (isErr === true) {
    return <div>404 Page Not Found: Improper queries</div>;
  }

  return (
    <>
      <h1>NC-News</h1>
      <HomeNav setSearchParams={setSearchParams} searchParams={searchParams} />
      <ArticleContainer searchParams={searchParams} setIsErr={setIsErr} />
    </>
  );
}
