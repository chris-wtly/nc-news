import { ArticleContainer } from "./ArticleContainer";

export function Home() {
  return (
    <>
      <h1>NC-News</h1>
      <nav>
        <a className="topic_link">Topics</a>
      </nav>
      <ArticleContainer />
    </>
  );
}
