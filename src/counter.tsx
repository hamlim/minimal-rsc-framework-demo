"use client";

import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
