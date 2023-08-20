import { useState } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Paris", "Berlin", "Tokyo"];

  // state hook - hooks allow us to use internal features in React
  // this hook allows us to tell React that this component has state or data that can change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // convention says to name function in such a way (with 'set' at the begining

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
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
