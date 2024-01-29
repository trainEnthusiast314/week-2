// Set up code - do not remove
document
  .querySelector("button#textColour")
  .addEventListener("click", blueToRed);
document
  .querySelector("button#bgColour")
  .addEventListener("click", greenToPink);
document.querySelector("button#fonts").addEventListener("click", tnrToArial);
// Do not alter lines of code 2-4!
const blueParagraph = document.querySelector("#blueParagraph");

function blueToRed() {
  blueParagraph.style.color = "red";
  console.log(blueParagraph.style.color);
  blueParagraph.textContent = blueParagraph.textContent.replace("blue", "red");
  console.dir(blueParagraph);
  blueParagraph.style.fontFamily = "sans-serif";
}
const greenParagraphs = document.querySelectorAll(".greenBg");

function greenToPink() {
  for (let i = 0; i < greenParagraphs.length; i++) {
    greenParagraphs[i].className = "hotpinkBg";
  }
}

function tnrToArial() {}
