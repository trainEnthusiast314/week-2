document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.querySelector("#userForm");

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
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementsByName("username")[0];
    const age = document.getElementsByName("age")[0];
    if (/^\d+$/.test(age.value) && /^[a-zA-Z]+$/gim.test(username.value)) {
      dataBind.set("username", username.value);
      dataBind.set("age", age.value);
      //dataBind.display();
      dataBind.list();
    } else {
      alert("invalid age or name");
    }
  });
  const add = document.getElementById("add");
  function addItem() {
    let node = document.createElement("div");
    node.innerHTML = `<span>hello</span>`;
    document.getElementById("add").appendChild(node);
  }
  add.addEventListener("click", addItem);
});
