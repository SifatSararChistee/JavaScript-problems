function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  let hasNumber = false;
  for (let i = 0; i < name.length; i++) {
    if (name[i] >= "0" && name[i] <= "9") {
      return (hasNumber = true);
    }
  }
  return hasNumber;
}
