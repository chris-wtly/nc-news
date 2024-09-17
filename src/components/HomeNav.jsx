import { useEffect, useState } from "react";
import { fetchTopics } from "../requests";
import { Link } from "react-router-dom";

export function HomeNav() {
  const [topicsList, setTopicsList] = useState([]);
  useEffect(() => {
    fetchTopics().then(({ data: { topics } }) => {
      setTopicsList(topics);
    });
  }, []);
  return (
    <nav>
      <ul>
        {topicsList.map((topic) => {
          return (
            <Link key={topic.slug} to={`/?topic=${topic.slug}`}>
              <li>{topic.description}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
