import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        margin: 100,
        textAlign: "center",
      }}
    >
      <h6>{count}</h6>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
        <button
          type="button"
          disabled={count === 0}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        <button
          type="button"
          disabled={count === 10}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
