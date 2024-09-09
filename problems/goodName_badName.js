function checkName(name) {
  if (typeof name != "string") {
    return "Invalid";
  }
  let newString = name.toLowerCase();
  let badLetters = ["a", "y", "i", "e", "o", "u", "w"];
  let lastLetter = newString[newString.length - 1];
  let result = false;
  for (let letter of badLetters) {
    if (letter === lastLetter) {
      result = true;
    }
  }
  return result ? "Good Name" : "Bad Name";
}

let name1 = checkName("Sifate");
console.log(name1);
