const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submitBtn");
const jokeList = document.querySelector("#joke-list");

submitBtn.addEventListener("click", submitNumber);

function submitNumber(e) {
  const num = input.value;

  // Do xhr shit
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${num}`, true);

  xhr.onload = function() {
    const response = JSON.parse(this.responseText);
    const arr = response.value;
    arr.forEach(function(joke) {
      const li = document.createElement("li");
      li.className = "listItem";
      li.textContent = joke.joke;
      jokeList.appendChild(li);
    });
  };

  xhr.send();
}
