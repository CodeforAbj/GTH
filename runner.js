import { getRandomIndianName } from "./codex.js";
const inputContainer = document.getElementById("inputContainer");
const submitButton = document.getElementById("submitButton");

const key = getRandomIndianName();

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < key.length; i++) {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("maxLength", 1);
    input.setAttribute("id", `input${i}`);
    inputContainer.appendChild(input);
  }

  // Now add the event listeners to the dynamically created input elements
  const inputBoxes = document.querySelectorAll("input");
  inputBoxes.forEach((box, index) => {
    box.addEventListener("input", (e) => {
      if (e.target.value.match(/[a-zA-Z]/)) {
        if (index < inputBoxes.length - 1) {
          inputBoxes[index + 1].focus();
        } else {
          submitButton.focus();
        }
      } else {
        e.target.value = ""; // Clear invalid input
      }
    });
    box.addEventListener("keypress", (e) => {
      e.target.classList.remove("success", "halfWay", "failure");
      e.target.value = "";
    });
  });

  inputContainer.children[0].focus();
});

submitButton.addEventListener("click", () => {
  const enteredText = Array.from(inputContainer.children).map((input) =>
    input.value.toUpperCase()
  );
  const keyArray = Array.from(key.toUpperCase());
  for (let i = 0; i < key.length; i++) {
    inputContainer.children[i].className = "";
    if (keyArray[i] == enteredText[i]) {
      inputContainer.children[i].classList.add("success");
    } else if (keyArray.includes(enteredText[i])) {
      inputContainer.children[i].classList.add("halfWay");
    } else {
      inputContainer.children[i].classList.add("failure");
    }
  }
  inputContainer.children[0].focus();
});
