import { useState } from "react";

function Form({ setFormItem }) {
  //variables
  const [transportChoice, setTransportChoice] = useState("Car");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  //handler functions
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormItem((items) => {
      items.isFilled = true;
      return { ...items, transportChoice, time, name };
    });
    setName("");
    setTime("");
    setTransportChoice("Car");
  };
  //render
  return (
    <div>
      <h1>Form</h1>
      <form name="form">
        <label>
          date:{" "}
          <input
            type="date"
            onChange={(e) => {
              setTime(e.target.value);
            }}
            value={time}
          />
        </label>
        <br />
        <select
          name="transport"
          id=""
          onChange={(e) => {
            setTransportChoice(e.target.value);
          }}
          value={transportChoice}>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="train">Train</option>
        </select>
        <br />
        <label>
          name:{" "}
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>
        <br />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default Form;
