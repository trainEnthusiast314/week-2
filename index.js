const colours = [
  "red",
  "green",
  "blue",
  "orange",
  "lime",
  "olive",
  "black",
  "yellow",
];
const buildP = (placeholder, num) => {
  let i = 0;
  while (i < num) {
    const paragraph = document.createElement("p");
    const text = document.createTextNode(
      "Have you tried turning it off and back on again?"
    );

    paragraph.appendChild(text);

    placeholder.appendChild(paragraph);
    paragraph.style.color = colours[parseInt(Math.random() * colours.length)];
    i++;
  }
};

buildP(document.querySelector("#placeholder"), 12);
