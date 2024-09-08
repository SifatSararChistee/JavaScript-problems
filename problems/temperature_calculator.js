// Write a function to convert temperature from Celsius to Fahrenheit.

function tempCal(temperature) {
  temperatureInF = (temperature * 9) / 5 + 32;
  return temperatureInF;
}

const temp = tempCal(100);
console.log(temp);
