"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button><br />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}