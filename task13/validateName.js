export const validateNameLength = (event) => {
  if (event.target.value.length < 2) {
    alert("Name not long enough");
    nameInput.focus();
  }
};
