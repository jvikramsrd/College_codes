import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          {" "}
          increment {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          {" "}
          decrement {count}{" "}
        </button>
        <button onClick={() => setCount((count) => 0)}>count is {count}</button>
      </div>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
