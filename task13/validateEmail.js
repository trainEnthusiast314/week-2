export const validateEmailFormat = (event) => {
  if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
  ) {
    alert(`Email address not in a valid format`);
    emailInput.focus();
  }
};
