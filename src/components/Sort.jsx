export function Sort({ searchParams, setSearchParams }) {
  const handleSortClick = (event) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", event.target.value);
    setSearchParams(newParams);
  };
  return (
    <ul className="NavList">
      <li className="NavItem">
        <button
          value={"title"}
          onClick={(event) => {
            handleSortClick(event);
          }}
        >
          Title
        </button>
      </li>
      <li className="NavItem">
        <button
          value={"votes"}
          onClick={(event) => {
            handleSortClick(event);
          }}
        >
          Votes
        </button>
      </li>
      <li className="NavItem">
        <button
          value={"created_at"}
          onClick={(event) => {
            handleSortClick(event);
          }}
        >
          Date
        </button>
      </li>
    </ul>
  );
}
