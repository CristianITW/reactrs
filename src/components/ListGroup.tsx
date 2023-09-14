function ListGroup() {
  let items = [
    "Shrek",
    "Fiona",
    "Ciuchino",
    "Lord Farquaad",
    "L'uomo focaccina",
    "Omino pan di zenzero",
  ];

  //items = [];

  return (
    <>
      <h1>S H R E K</h1>
      {items.length === 0 && <p>Non ci sono personaggi</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, "è stato Shrekkato")}
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
