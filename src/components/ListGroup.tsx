function ListGroup() {
  const items = ["New York", "San Francisco", "Paris", "Berlin", "Tokyo"];

  // In real word you will use item.id as a key
  // Niesamowicie mi sie podoba ten syntax: metoda map na liscie zmapowala jej kazdy element na element html
  // pamietaj ze JFX jest translowany na html dlatego kod trzeba wrapnac w curly brackets
  // ten syntax z <> i </> ktory wrapuje caly kod mowi do React'a ze to ma byc zamienione tylko na jedna linijke React.createElement('...')
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
