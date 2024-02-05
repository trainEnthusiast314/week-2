import { useState } from "react";

function DropDownList() {
  const [chickenChoice, setChickenChoice] = useState("");
  return (
    <div>
      <h1>you chose:{chickenChoice} </h1>
      <select name="" id="" onChange={(e) => setChickenChoice(e.target.value)}>
        <option value="selects">selects</option>
        <option value="nuggets">nuggets</option>
        <option value="burger">burger</option>
      </select>
    </div>
  );
}

export default DropDownList;
