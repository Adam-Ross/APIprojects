const button = document.querySelector("#button");
const output = document.querySelector("#output");
const button2 = document.querySelector("#jokesBtn");
const categories = document.querySelector("#categories");
const catContainer = document.querySelector(".cat-container");
const jokeNumberForm = document.querySelector("#jokeNumberForm");
const jokeNumberInput = document.querySelector("#jokeNumberInput");
const button18 = document.querySelector("#button18");
const button17 = document.querySelector("#button17");
const contentContainer = document.querySelector("#contentContainer");
const ageVerifyField = document.querySelector("#ageVerifyField");
// Add event listener
loadEventListeners();

function loadEventListeners() {
  button17.addEventListener("click", underAge);
  button18.addEventListener("click", ofAge);
  button.addEventListener("click", getJoke);
  button2.addEventListener("click", showInput);
  // catContainer.addEventListener("click", getCategoryJoke);
  jokeNumberForm.addEventListener("submit", getJokes);
  categories.addEventListener("click", getCategoryJoke);
}

function underAge() {
  console.log("underage");

  getCategoriesUnderage();

  contentContainer.style.display = "block";
  ageVerifyField.style.display = "none";
}

function ofAge() {
  getCategories();

  contentContainer.style.display = "block";
  ageVerifyField.style.display = "none";
}

function getCategoryJoke(e) {
  clearOutput();
  jokeNumberForm.style.display = "none";
  const category = e.target.textContent;

  xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://api.chucknorris.io/jokes/random?category=${category}`,
    true
  );

  xhr.onload = function() {
    const joke = JSON.parse(xhr.responseText);
    const li = document.createElement("li");
    li.textContent = joke.value;
    li.className = "collection-item";
    output.appendChild(li);
  };

  xhr.send();
}

function getCategoriesUnderage() {
  xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/categories", true);

  xhr.onload = function() {
    const res = JSON.parse(xhr.responseText);

    res.forEach(category => {
      const li = document.createElement("li");
      const cls = ["button", "category"];
      li.classList.add(...cls);
      li.textContent = category;
      if (category !== "explicit") {
        categories.appendChild(li);
      }
    });
  };

  xhr.send();
}

function getCategories() {
  xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/categories", true);

  xhr.onload = function() {
    const res = JSON.parse(xhr.responseText);

    res.forEach(category => {
      if (category === "explicit") {
      }
      const li = document.createElement("li");
      const cls = ["button", "category"];
      li.classList.add(...cls);
      li.textContent = category;
      categories.appendChild(li);
    });
  };

  xhr.send();
}

function clearOutput() {
  output.innerHTML = "";
}

function getJoke() {
  jokeNumberForm.style.display = "none";
  clearOutput();
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);

  xhr.onload = function() {
    const res = JSON.parse(xhr.responseText);

    const li = document.createElement("li");
    li.id = "list-item";
    li.className = "collection-item";
    li.style.listStyle = "none";
    li.textContent = res.value;
    output.appendChild(li);
  };

  xhr.send();
}

function showInput() {
  jokeNumberForm.style.display = "block";
}

function getJokes(e) {
  clearOutput();
  if (jokeNumberInput.value === "") {
    alert("Hey, asshole, Chuck Norris demands you enter a number...");
  } else {
    const xhr = new XMLHttpRequest();
    const numberOfJokes = jokeNumberInput.value;

    xhr.open("GET", `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

    xhr.onload = function() {
      const res = JSON.parse(xhr.responseText);

      res.value.forEach(elem => {
        const li = document.createElement("li");
        li.className = "collection-item";
        li.textContent = elem.joke;
        output.appendChild(li);
      });
    };

    xhr.send();
    clearInput();
  }

  e.preventDefault();
}

function clearInput() {
  jokeNumberInput.value = "";
}
