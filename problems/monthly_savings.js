function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "Invalid Input";
  }
  let totalIncome = 0;
  for (let payment of arr) {
    if (payment >= 3000) {
      let tax = payment * 0.2;
      totalIncome += payment - tax;
    } else {
      totalIncome += payment;
    }
  }
  savings = totalIncome - livingCost;
  return savings >= 0 ? savings : "earn more";
}

let firstMonth = monthlySavings(100, [900, 2700, 3400]);
console.log(firstMonth);
