if (data == undefined) {
  data = {};
}

let dataBind = function () {};
dataBind.get = function (key) {
  let field = data;
  key.split(".").forEach((item) => {
    field = field[item];
  });
  console.log(key);
  return field;
};
dataBind.set = function (key, value) {
  data[key] = value;
};

dataBind.display = function () {
  document.querySelectorAll("[data]").forEach(function (item) {
    if (item.name == undefined) {
      let key = item.getAttribute("data");
      if (dataBind.get(key) !== undefined) {
        item.innerText = dataBind.get(key);
      }
    } else {
      let key = item.name;
      if (dataBind.get(key) !== undefined) {
        item.value = dataBind.get(key);
      }
    }
  });
};

dataBind.save = function () {
  console.log(JSON.stringify(data));
  sessionStorage.setItem("data", JSON.stringify(data));
};

dataBind.display();

document.addEventListener("input", function (e) {
  dataBind.set(e.target.name, e.target.value);
  dataBind.display();
});
