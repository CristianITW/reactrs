//import { MouseEvent } from "react";
import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelection: (item: string) => void;
}

function ListGroup({ items, heading, onSelection }: ListGroupProps) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //items = [];

  //Event Handler
  //const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>Non ci sono personaggi</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelection(item);
            }}
          >
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
