document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#testInput");
  const button = document.querySelector("#testButton");

  input.addEventListener("change", (e) => {
    document.cookie = e.target.value;
  });
  button.addEventListener("click", (e) => {
    alert(document.cookie);
  });
});
