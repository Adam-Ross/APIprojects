const textBtn = document.querySelector("#text");
const jsonBtn = document.querySelector("#json");
const output = document.querySelector("#output");
const apiBtn = document.querySelector("#apiData");
textBtn.addEventListener("click", getText);
jsonBtn.addEventListener("click", getJson);
apiBtn.addEventListener("click", getChuckNorrisJokes);

// Fetching from a text file...
function getText() {
  fetch("./files/test.txt")
    .then(res => {
      return res.text();
    })
    .then(text => {
      output.innerHTML = text;
    })
    .catch(err => {
      console.log("not working");
    });
}

// fetching from a json file
function getJson() {
  clearOutput();
  fetch("files/test.json")
    .then(res => {
      return res.json();
    })
    .then(data => {
      data.forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.author;
        output.appendChild(li);
      });
    });
}

function getChuckNorrisJokes() {
  clearOutput();
  fetch("http://api.icndb.com/jokes/random/3")
    .then(res => {
      return res.json();
    })
    .then(res => {
      return res.value;
    })
    .then(arr => {
      arr.forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.joke;
        output.appendChild(li);
      });
    })
    .catch(err => {
      console.log(err);
    });
}

function clearOutput() {
  output.innerHTML = "";
}
