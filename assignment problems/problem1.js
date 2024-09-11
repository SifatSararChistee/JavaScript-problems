function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) {
    return "Invalid Input";
  }
  const taxAmount = income - expenses;
  const tax = taxAmount * 0.2;
  return tax;
}
