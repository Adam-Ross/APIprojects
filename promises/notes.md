- Drill this in head.

- A promise is going to be in 1 of 3 states: fullfilled, pending, or rejected.

- When you make a new promise, it has a callback that takes a resolve and a reject value.

const p = new Promise((resolve, reject) => {
const response = 3;
if(response === 3) {
resolve('worked')
} else {
resolve('did not work')
}
})

- Once a promise is made, use the then keyword/ method to interact with it.

p.then((message) => {
console.log(message);
}).catch((error) => {
console.log(error);
})
