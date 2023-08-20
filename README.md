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

