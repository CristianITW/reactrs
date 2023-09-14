//import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>Hello Shrek</Alert>
    </div>
  );
}

export default App;

/*function App() {
  /let items = [
    "Shrek",
    "Fiona",
    "Ciuchino",
    "Lord Farquaad",
    "L'uomo focaccina",
    "Omino pan di zenzero",
  ];

  const handleSelectItem = (item: string) => {
    {
      console.log(item);
    }
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="S H R E K CHAR"
        onSelection={handleSelectItem}
      />
    </div>
  );
}

export default App;
*/
