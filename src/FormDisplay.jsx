import { useEffect, useState } from "react";
import axios from "axios";
function FormDisplay({ formItem }) {
  //variables
  const [product, setProduct] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  //api call
  useEffect(() => {
    setIsLoaded(false);
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => {
        setProduct(res.data.products);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setProduct]);
  //functions
  const printList = (list, listLength = 1000) => {
    try {
      return list.map((item, index) => {
        if (index < listLength) {
          return <li key={item.id}>{item.title}</li>;
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  //render
  return (
    <div>
      {isLoaded ? (
        formItem.isFilled ? (
          <div>
            <h1>Information</h1>
            <ul>
              <li>Name: {formItem.name}</li>
              <li>Date: {formItem.time}</li>
              <li>Transport: {formItem.transportChoice}</li>
            </ul>
            <h2>list of products</h2>
            <ul>{printList(product, 5)}</ul>
          </div>
        ) : (
          <h1>Form Not Filled</h1>
        )
      ) : (
        <p>...Loading</p>
      )}
    </div>
  );
}

export default FormDisplay;
