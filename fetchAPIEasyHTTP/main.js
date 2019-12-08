const http = new EasyHTTP();
const getNamesBtn = document.querySelector("#getNamesBtn");
const postDataBtn = document.querySelector("#post");
const putDataBtn = document.querySelector("#putDataBtn");
const delteDataBtn = document.querySelector("#deleteDataBtn");

loadEventListeners();

function loadEventListeners() {
  getNamesBtn.addEventListener("click", getNames);
  postDataBtn.addEventListener("click", postData);
  putDataBtn.addEventListener("click", putData);
  deleteDataBtn.addEventListener("click", deleteData);
}

function getNames() {
  http.get("https://jsonplaceholder.typicode.com/users").then(users => {
    users.forEach(user => {
      console.log(user.name);
    });
  });
}

const data = {
  name: "Mike jones",
  job: "Drug cooker"
};

function postData() {
  http
    .post("https://jsonplaceholder.typicode.com/users", data)
    .then(res => console.log(res));
}

const data2 = {
  name: "Matthew",
  job: "Spoon Cooker holder"
};

function putData() {
  http
    .put("https://jsonplaceholder.typicode.com/users/1", data2)
    .then(res => console.log(res));
}

function deleteData() {
  http
    .delete("https://jsonplaceholder.typicode.com/users/1")
    .then(res => console.log(res));
}
