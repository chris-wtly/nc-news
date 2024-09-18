import { useEffect, useState } from "react";
import { fetchTopics } from "../requests";
import { Link } from "react-router-dom";
import { Order } from "./Order";
import { Sort } from "./Sort";

export function HomeNav({ setSearchParams, searchParams }) {
  const [topicsList, setTopicsList] = useState([]);
  useEffect(() => {
    fetchTopics().then(({ data: { topics } }) => {
      setTopicsList(topics);
    });
  }, []);

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
      <ul className="NavList" id="outerList">
        <li className="NavItem">
          <Sort setSearchParams={setSearchParams} searchParams={searchParams} />
        </li>
        <li className="NavItem">
          <Order
            setSearchParams={setSearchParams}
            searchParams={searchParams}
          />
        </li>
      </ul>
    </nav>
  );
}
