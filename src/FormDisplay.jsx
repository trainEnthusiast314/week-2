import { useEffect, useState } from "react";
import axios from "axios";
function FormDisplay({ formItem }) {
  const [product, setProduct] = useState("");
  useEffect(() => {
    const id = Math.floor(Math.random() * 30) + 1;
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data["title"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setProduct]);
  return (
    <div>
      {formItem.isFilled ? (
        <div>
          <h1>Information</h1>
          <ul>
            <li>Name: {formItem.name}</li>
            <li>Date: {formItem.time}</li>
            <li>Transport: {formItem.transportChoice}</li>
            <li>Item: {product}</li>
          </ul>
        </div>
      ) : (
        <h1>Form Not Filled</h1>
      )}
    </div>
  );
}

export default FormDisplay;
