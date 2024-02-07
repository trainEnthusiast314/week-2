import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Hello() {
  //variables
  let [count, setCount] = useState(0);
  const [searchParams] = useSearchParams();

  let link =
    "https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=" +
    searchParams.get("name");

  //render
  return (
    <div>
      <img src={link} />
      <h1>Hello World</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(++count);
        }}>
        Count
      </button>
    </div>
  );
}

export default Hello;
