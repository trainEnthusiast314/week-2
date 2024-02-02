import { useState } from "react";

function Hello() {
  //variables
  const [count, setCount] = useState(0);
  //handler functions
  const handleClick = () => {
    setCount((count) => {
      return (count = count + 1);
    });
  };
  //render
  return (
    <div>
      <h1>Hello World</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>Count</button>
    </div>
  );
}

export default Hello;
