const cb = document.querySelector("#cb");

const posts = [
  { title: "post one", contents: "This is supposed to be a tweet." },
  { title: "post two", contents: "This is supposed to be another tweet." },
  { title: "post three", contents: "This is supposed to be a third tweet." },
  { title: "post four", contents: "This is supposed to be a forth tweet." }
];

function createPost(post, callback) {
  setTimeout(function() {
    callback();
    posts.push(post);
  }, 2000);
}

function getPosts() {
  let output = "";
  setTimeout(function() {
    posts.forEach(post => {
      output += `<li>${post.title}</li>
                  <p>${post.contents}</p>`;
      console.log("fuck");
    }, 1000);
    cb.innerHTML = output;
  });
}

createPost(
  {
    title: "Added post",
    contents: "THis is supposed to be a last tweet."
  },
  getPosts
);

getPosts();
console.log(posts);
