const http = new easyHTTP();

http.get("https://jsonplaceholder.typicode.com/posts", function(err, response) {
  if (err) {
    console.log(err);
  } else {
    response.forEach(post => {
      console.log(post.id);
    });
  }
});

const data = {
  name: "Mike",
  age: 24
};
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    if (response === "{}") {
      console.log("shit worked");
    }
  }
});

// const getPostsBtn = document.querySelector("#getPostsBtn");
// const clearBtn = document.querySelector("#clearBtn");
// const output = document.getElementById("output");
// const postDataBtn = document.querySelector("#postDataBtn");
// const http = new easyHTTP();

// loadEventListeners();

// function loadEventListeners() {
//   // document.addEventListener("DOMContentLoaded", update);
//   postDataBtn.addEventListener("click", postData);
//   getPostsBtn.addEventListener("click", getPosts);
//   clearBtn.addEventListener("click", clearPosts);
// }

// function getPosts() {
//   http.get("https://jsonplaceholder.typicode.com/posts", function(
//     err,
//     response
//   ) {
//     if (err) {
//       console.log(err);
//     } else {
//       response.forEach(post => {
//         const li = document.createElement("li");
//         li.textContent = post.title;
//         li.className = "collection-item";
//         output.appendChild(li);
//       });
//     }
//   });
// }

// const data = { name: "mike", age: 24 };

// function update() {
//   http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
//     err,
//     response
//   ) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   });
// }

// function postData() {
//   http.post("https://jsonplaceholder.typicode.com/posts", data, function(
//     err,
//     response
//   ) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   });
// }

// http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// function clearPosts() {
//   output.innerHTML = "";
// }

// const http = new easyHTTP();

// http.get("https://jsonplaceholder.typicode.com/posts", function(response) {
//   const posts = JSON.parse(response);
//   posts.forEach(post => {
//     console.log(post.title);
//   });
// });
