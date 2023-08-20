import { MouseEvent } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Paris", "Berlin", "Tokyo"];

  const handleOnClick = (event: MouseEvent) => console.log(event)

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleOnClick}
          >
            {item}
          </li>
        ))}
        ł
      </ul>
    </>
  );
}

export default ListGroup;
