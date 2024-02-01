const data = {};
const dataBind = () => {};
dataBind.get = (key) => {
  return data[key];
};
dataBind.set = (key, value) => {
  data[key] = value;
};
dataBind.display = () => {
  document.querySelectorAll("[username], [data]").forEach((item) => {
    if (item.username == undefined) {
      let key = item.getAttribute("data");

      item.innerText = data[key];
    } else {
      item.value = data[item.username];
    }
  });
};
dataBind.list = () => {
  const newUl = document.createElement("ul");
  const newLi = document.createElement("li");
  const content = document.createTextNode(
    `USERNAME: ${data["username"]}     AGE: ${data["age"]}`
  );
  const filledLi = newLi.appendChild(content);
  newUl.appendChild(filledLi);

  document.querySelector("#container").appendChild(newUl);
};
dataBind.save = () => {
  sessionStorage.setItem("username", JSON.stringify(data["username"]));
  sessionStorage.setItem("age", JSON.stringify(data["age"]));
};
