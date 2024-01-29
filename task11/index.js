// Add code here for part 5-7
document.querySelector("#textColour").addEventListener("click", blueToRed);
document.querySelector("#bgColour").addEventListener("click", greenToPink);
document.querySelector("#fonts").addEventListener("click", tnrToArial);

// Do nt change the code between here and the next comment
const blueParagraph = document.querySelector("#blueText");

function blueToRed() {
  blueParagraph.style.color = "red";
  blueParagraph.textContent = blueParagraph.textContent.replace("blue", "red");
}

const greenParagraphs = document.querySelectorAll(".greenBg");

function greenToPink() {
  for (let greenParagraph of greenParagraphs) {
    greenParagraph.className = "hotpinkBg";
    greenParagraph.textContent = greenParagraph.textContent.replace(
      "green",
      "hotpink"
    );
  }
}

const tnrParagraph = document.querySelector("#tnrParagraph");

function tnrToArial() {
  tnrParagraph.style.fontFamily = "arial";
  tnrParagraph.textContent = tnrParagraph.textContent.replace(
    "Times New Roman",
    "Arial"
  );
}

// Add the event handlers for mouse over, mouse out and click on tnrParagraph here and register them

const mouseOver = (event) => {
  console.dir(event.target.style.backgroundColor);
  event.target.style.backgroundColor = "limegreen";
};

document
  .querySelector("#tnrParagraph")
  .addEventListener("mouseover", mouseOver);
document
  .querySelector("#tnrParagraph")
  .addEventListener("mouseleave", mouseLeave);
function mouseLeave(event) {
  event.target.style.backgroundColor = "yellow";
}
console.dir(blueParagraph);
function elementClick(event) {
  event.target.style.backgroundColor = "white";
  event.target.textContent = "i have no event listeners attached to me now";
  event.target.removeEventListener("click");
  event.target.removeEventListener("mouseover");
  event.target.removeEventListener("mouseleave");
}
