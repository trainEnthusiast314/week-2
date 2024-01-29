const formSubmit = (event) => {
  event.preventDefault();

  alert("form submitted");
  for (let i = 0; i < 3; i++) {
    console.log(event.target[i].value);
  }
};

document.querySelector("form").addEventListener("submit", formSubmit);
const nameInput = document.getElementsByName("name")[0];

const validateNameLength = (event) => {
  if (event.target.value.length < 2) {
    alert("name not long enough");
    nameInput.focus();
    return;
  }
};
nameInput.addEventListener("change", validateNameLength);

const emailInput = document.getElementsByName("email")[0];

const validateEmailFormat = (event) => {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(event.target.value)) {
    alert("invalid email");
    emailInput.focus();
  }
};

emailInput.addEventListener("change", validateEmailFormat);
