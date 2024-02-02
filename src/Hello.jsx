import { useState } from "react";

function Hello() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((count) => {
      return (count = count + 1);
    });
  };
  const person = { name: "Dave", age: "25" };
  return (
    <div>
      <h1>Hello World</h1>
      <h2>{count}</h2>
      <button onClick={onClick}>Count</button>
    </div>
  );
}

export default Hello;
