// Write a function to count the number of vowels in a string.

// a, e, i, o, u

function vowelsCounter(string) {
  let newString = string.toLowerCase();
  let vowels = "aeiou";
  let count = 0;
  for (let letter of newString) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

let string1 = vowelsCounter("Rare About");
console.log(string1);

let string2 = vowelsCounter("Exclusive");
console.log(string2);
