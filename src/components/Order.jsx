export function Order({ searchParams, setSearchParams }) {
  const handleOrderClick = (event) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", event.target.value);
    setSearchParams(newParams);
  };
  return (
    <ul className="NavList">
      <li className="NavItem">
        <button
          value={"ASC"}
          onClick={(event) => {
            handleOrderClick(event);
          }}
        >
          Top / Newest
        </button>
      </li>
      <li className="NavItem">
        <button
          value={"DESC"}
          onClick={(event) => {
            handleOrderClick(event);
          }}
        >
          Lowest / Oldest
        </button>
      </li>
    </ul>
  );
}
