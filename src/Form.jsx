import { useState } from "react";

function Form({ setFormItem }) {
  //variables
  const [inputs, setInputs] = useState({});
  //handler functions
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormItem((items) => {
      return { ...items, ...inputs, isFilled: true };
    });
    setInputs({});
  };
  const handleChange = (e) => {
    return setInputs((item) => {
      return { ...item, [e.target.name]: e.target.value };
    });
  };
  console.log(inputs);

  //render
  return (
    <div>
      <h1>Form</h1>
      <form name="form" onSubmit={handleSubmit}>
        <label>
          date: <input type="date" name="time" onChange={handleChange} />
        </label>
        <br />
        <select name="transportChoice" id="" onChange={handleChange}>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="train">Train</option>
        </select>
        <br />
        <label>
          name: <input type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
