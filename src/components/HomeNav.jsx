import { useEffect, useState } from "react";
import { fetchTopics } from "../requests";
import { Link } from "react-router-dom";
import { Order } from "./Order";
import { Sort } from "./Sort";
import { ErrorLoading } from "./ErrorPage";

export function HomeNav({ setSearchParams, searchParams }) {
  const [topicsList, setTopicsList] = useState([]);
  const [isTopicErr, setIsTopicErr] = useState(false);
  useEffect(() => {
    fetchTopics()
      .then(({ data: { topics } }) => {
        setTopicsList(topics);
      })
      .catch((err) => {
        if (err) {
          setIsTopicErr(true);
        }
      });
  }, []);

  if (isTopicErr) {
    return <ErrorLoading />;
  }

  return (
    <nav>
      <ul>
        Topics
        {topicsList.map((topic) => {
          return (
            <Link key={topic.slug} to={`/?topic=${topic.slug}`}>
              <li>{topic.description}</li>
            </Link>
          );
        })}
      </ul>
      <ul className="noBullets">
        <li>
          <Sort setSearchParams={setSearchParams} searchParams={searchParams} />
        </li>
        <li>
          <Order
            setSearchParams={setSearchParams}
            searchParams={searchParams}
          />
        </li>
      </ul>
    </nav>
  );
}
