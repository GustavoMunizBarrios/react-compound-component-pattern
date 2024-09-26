/* eslint-disable no-unused-vars */
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = (c) => c + 1;
  const decrease = (c) => c - 1;

  return <span>Counter</span>;
}
export default Counter;
