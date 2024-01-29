import { validateEmailFormat } from "./validateEmail.js";
import { formSubmit } from "./formSubmit.js";
import { validateNameLength } from "./validateName.js";
console.dir("hello");
const nameInput = document.querySelector('[name="name"]');
const emailInput = document.querySelector('[name="email"]');

document.querySelector("form").addEventListener("submit", formSubmit);

nameInput.addEventListener("change", validateNameLength);

emailInput.addEventListener("change", validateEmailFormat);
