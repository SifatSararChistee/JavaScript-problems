// Generate a random number between 10 to 20.

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = getRandomIntInRange(10, 20);
console.log(randomNum);
