const categoriesList = document.querySelector("#categoriesList");
const singleJokeBtn = document.querySelector("#singleJoke");
const multipleJokesBtn = document.querySelector("#multipleJokes");
const output = document.querySelector("#output");
const dynamicElements = document.querySelectorAll(".dynamic");
const numberInputForm = document.querySelector("#numberInputForm");
const numberInputField = document.querySelector("#numberInputField");
const ageVerifyContainer = document.querySelector("#ageVerifyContainer");
const btn18 = document.querySelector("#btn18");
const btnNot18 = document.querySelector("#btnNot18");
const mainContainer = document.querySelector("#mainContainer");
const clearBtn = document.querySelector("#clearBtn");

loadEventListeners();

function loadEventListeners() {
  btn18.addEventListener("click", getCategories);
  btnNot18.addEventListener("click", getMinorCategories);
  singleJokeBtn.addEventListener("click", getSingleJoke);
  multipleJokesBtn.addEventListener("click", showDynamic);
  numberInputForm.addEventListener("submit", getMultipleJokes);
  categoriesList.addEventListener("click", getCategoryJoke);
  clearBtn.addEventListener("click", clearMultipleJokes);
}

function getCategories() {
  showMainContainer();
  hideAgeVerify();
  console.log("working");
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/categories", true);

  xhr.onload = function() {
    const categories = JSON.parse(xhr.responseText);

    categories.forEach(category => {
      const li = document.createElement("li");
      li.classList.add("button", "category-item");
      li.textContent = category;
      categoriesList.appendChild(li);
    });
  };
  xhr.send();
}

function clearMultipleJokes() {
  output.innerHTML = "";
  hideClearButton();
  hideDynamic();
}

function hideClearButton() {
  clearBtn.style.display = "none";
}

function hideAgeVerify() {
  ageVerifyContainer.style.display = "none";
}

function getMinorCategories() {
  showMainContainer();

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/categories", true);

  xhr.onload = function() {
    const categories = JSON.parse(xhr.responseText);

    categories.forEach(category => {
      if (category !== "explicit") {
        const li = document.createElement("li");
        li.classList.add("button", "category-item");
        li.textContent = category;
        categoriesList.appendChild(li);
      }
    });
  };
  xhr.send();
}

function showMainContainer() {
  mainContainer.style.display = "block";
}

function getCategoryJoke(e) {
  clearField();
  hideDynamic();
  const category = e.target.textContent;

  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );

  xhr.onload = function() {
    const res = JSON.parse(xhr.responseText);

    console.log(res.value);
    const li = document.createElement("li");
    li.className = "joke";
    li.textContent = res.value;
    output.appendChild(li);
  };

  xhr.send();
}

function getSingleJoke() {
  clearField();
  hideDynamic();
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "http://api.icndb.com/jokes/random", true);

  xhr.onload = function() {
    const joke = JSON.parse(xhr.responseText);

    const li = document.createElement("li");
    li.className = "joke";
    li.textContent = joke.value.joke;
    output.appendChild(li);
    console.log(li);
  };
  xhr.send();
}

function showDynamic(e) {
  dynamicElements.forEach(elem => {
    elem.style.display = "block";
  });
  e.preventDefault();
}

function hideDynamic() {
  dynamicElements.forEach(elem => {
    elem.style.display = "none";
  });
}

function showClearButton() {
  clearBtn.style.display = "block";
}

function getMultipleJokes(e) {
  clearField();
  showClearButton();
  const number = numberInputField.value;
  if (number !== "") {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
      const jokes = JSON.parse(xhr.responseText);

      jokes.value.forEach(joke => {
        console.log(joke.joke);
        const li = document.createElement("li");
        li.className = "joke";
        li.textContent = joke.joke;
        output.appendChild(li);
        numberInputField.value = "";
      });
    };

    xhr.send();
  } else {
    alert("enter a number...");
  }

  e.preventDefault();
}

function clearField() {
  output.innerHTML = "";
}
