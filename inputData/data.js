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
      dataBind.display();
      dataBind.list();
      dataBind.save();
    } else {
      alert("invalid age or name");
    }
  });

  function addItem(templateName) {
    let template = document.querySelector(
      `[data-template="${templateName}"]`
    ).innerHTML;
    template.replaceAll("{count}");
    let node = document.createElement("div");
    node.innerHTML = template;
    document.getElementById("itemList").appendChild(node);
  }
  //add.addEventListener("click", addItem);
  fetch("https://cat-fact.herokuapp.com/facts")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let catNode = document.createElement("div");
      catNode.innerHTML = `<span>${res[0].text}</span>`;
      //add.appendChild(catNode);
    });
  //how to save data to local storage better then cookies
  dataBind.save = () => {
    sessionStorage.setItem("username", JSON.stringify(data["username"]));
    sessionStorage.setItem("age", JSON.stringify(data["age"]));
  };
});
