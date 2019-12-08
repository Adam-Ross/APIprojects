const posts = [
  { number: 1, body: "This is post 1" },
  { number: 2, body: "This is post 2" },
  { number: 3, body: "This is post 3" }
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    const error = true;

    if (!error) {
      setTimeout(() => {
        posts.push(post);
        resolve();
      }, 2000);
    } else {
      reject("Something went wrong when creating");
    }
  });
}

function getPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let output = "";
      posts.forEach(post => {
        output += `
            <li>${post.body}</li>
          `;
      });
      document.body.innerHTML = output;
      resolve("worked fine...");
    }, 1000);
  });
}
const post = { number: 4, body: "this is post 4" };
createPost(post)
  .then(getPosts)
  .then(response => {
    console.log(response);
  })
  .catch(response => {
    console.log(response);
  });
