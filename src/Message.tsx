// TypeScript dopuszcza dwa file extensions 'ts' i 'tsx'. Konwencja jest taka ze React Components nazywamy 'tsx'.
// React component mozesz zaimplementować w JS jako klasa lub jako funkcja. Function-based to nowsze i rekomendowane teraz podejście


// nazwa komponentu pisz PascalCasem
function Message() {
    // syntax poniżej to JavaScript XML - JSX w skrócie.

    const name = 'Mosh';

    return <h1>Hello {name}</h1>;
}

export default Message;
