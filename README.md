# mosh-tutorial

## Project structure
- node modules
   - all 3rd party libs. Never touch this
- public
   - public assets of our website: like images, video files
- src
   - App.tsx
      - component code
- index.html
   - html template
      - div with id root
- package.json
   - info about this project
- tsconfig
   - how to compile our code to JavaScript, in most cases you never have to touch this file


## Pierwszy komponent
```typescript
// TypeScript dopuszcza dwa file extensions 'ts' i 'tsx'. Konwencja jest taka ze React Components nazywamy 'tsx'.
// React component mozesz zaimplementować w JS jako klasa lub jako funkcja. Function-based to nowsze i rekomendowane teraz podejście


// nazwa komponentu pisz PascalCasem
function Message() {
    // syntax poniżej to JavaScript XML - JSX w skrócie.
    return <h1>Hello World</h1>;
}
```

Żeby wywołać w top level compoennt to:
App.tsx
```typescript
import Message from "./Message"

function App() {
  return <div><Message></Message></div>
}

export default App;
```


## Render a list

```typescript
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
```

## Conditional rendering

```typescript
function ListGroup() {
  const items = ["New York", "San Francisco", "Paris", "Berlin", "Tokyo"];

  const mensaje = items.length === 0 ? <p>No item found</p> : null;
  // this below is very common technique in React Community to render componenets dynamically
  const mensaje2 = items.length === 0 && <p>No item found</p>;

  return (
    <>
      <h1>List</h1>
      {mensaje}
      {mensaje2}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        ł
      </ul>
    </>
  );
}

export default ListGroup;
```

## OnClick simple event
```typescript
function ListGroup() {
  const items = ["New York", "San Francisco", "Paris", "Berlin", "Tokyo"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("Clicked " + item, index)}
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
```
another version
```typescript
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
```

## Managing state
```typescript
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
```

## Passing data via Props
App.tsx
```typescript
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Paris", "Berlin", "Tokyo"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
```
ListGroup.tsx
```typescript
import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: Props) {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
```

## Passing functions via Props
To pozwala miec nam handler w componencie wyzej na rzecz ktora dzieje sie w komponencie nizej </br>
Wyzej, nizej - w sensie w hierarchi Virtual DOM.

App.tsx
```typescript
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Paris", "Berlin", "Tokyo"];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
```
ListGroup.tsx
```typescript
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
              onSelectItem(item);
            }}
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
```
