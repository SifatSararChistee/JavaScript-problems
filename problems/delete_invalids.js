function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid";
  }
  const numberArray = array.filter(
    (item) => typeof item === "number" && !Number.isNaN(item)
  );
  return numberArray;
}

let array1 = deleteInvalids({ num: [1, 2, 3] });
console.log(array1);
