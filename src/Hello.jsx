import { useState } from "react";

function Hello() {
  //variables
  let [count, setCount] = useState(0);
  //render
  return (
    <div>
      <h1>Hello World</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(++count);
        }}></button>
    </div>
  );
}

export default Hello;
