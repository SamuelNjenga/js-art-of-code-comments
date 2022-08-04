const posts = [15, 16, 17, 18, 19];
const sumOne = posts.reduce((s, p) => s + p, 0);
console.log(`The sum is ${sumOne}`);

let sumTwo = 0;
posts.map((e) => {
  sumTwo += e;
});
console.log(`The sum is ${sumTwo}`);
