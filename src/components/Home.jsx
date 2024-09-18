import { ArticleContainer } from "./ArticleContainer";
import { HomeNav } from "./HomeNav";
import { useSearchParams } from "react-router-dom";

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <h1>NC-News</h1>
      <HomeNav setSearchParams={setSearchParams} searchParams={searchParams} />
      <ArticleContainer searchParams={searchParams} />
    </>
  );
}
