const http = new EasyHTTP();
const output = document.querySelector("#output");
const postBtn = document.querySelector("#postBtn");
const putBtn = document.querySelector("#putBtn");
const titleBtn = document.querySelector("#titlesBtn");
const deleteBtn = document.querySelector("#deleteBtn");

loadEventListeners();

function loadEventListeners() {
  titleBtn.addEventListener("click", getTitles);
  postBtn.addEventListener("click", postData);
  putBtn.addEventListener("click", putData);
  deleteBtn.addEventListener("click", deleteData);
}

function getTitles() {
  http.get("https://jsonplaceholder.typicode.com/posts").then(res => {
    printTitle(res);
  });
}

function printTitle(res) {
  res.forEach(post => {
    const li = document.createElement("li");
    li.textContent = post.title;
    output.appendChild(li);
  });
}

function postData() {
  const data = {
    name: "Mike",
    age: 24
  };
  http
    .post("https://jsonplaceholder.typicode.com/posts", data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

function putData() {
  const data = {
    name: "Mike",
    age: 24
  };
  http
    .put("https://jsonplaceholder.typicode.com/posts/1", data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

function deleteData() {
  http
    .delete("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => {
      console.log("Resource deleted");
    })
    .catch(err => {
      console.log(err);
    });
}
