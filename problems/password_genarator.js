function password(obj) {
  if (
    obj.name === undefined ||
    obj.birthYear === undefined ||
    obj.siteName === undefined ||
    obj.birthYear.toString().length !== 4
  ) {
    return "Invalid";
  }
  let capital = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
  let passwordString = capital + "#" + obj.name + "@" + obj.birthYear;
  return passwordString;
}

let object = password({
  name: "maisha",
  birthYear: 2002,
});
console.log(object);
