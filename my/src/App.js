import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "index.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="card" onClick={() => setCount(count + 1)}>
        increment
      </button>
      <button type="card" onClick={() => setCount(count - 1)}>
        increment
      </button>
      <button type="card" onClick={() => setCount(0)}>
        increment
      </button>
      <h2>count is {count}</h2>
    </div>
  );
}

export default Counter;
