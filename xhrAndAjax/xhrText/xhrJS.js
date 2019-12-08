const button = document.querySelector("#button");
const output = document.querySelector("#output");

button.addEventListener("click", getData);

function getData() {
  // create new xhr object
  const xhr = new XMLHttpRequest();
  // #open
  xhr.open("GET", "tester.txt", true);
  // #onload
  xhr.onload = function() {
    const p = document.createElement("p");
    p.textContent = xhr.responseText;
    output.appendChild(p);
  };
  // #send
  xhr.send();
}
