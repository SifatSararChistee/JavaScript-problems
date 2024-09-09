function calculateMoney(ticketSale) {
  if (ticketSale <= 0) {
    return "Invalid Number";
  }
  const expenses = 500 + 8 * 50;
  const totalMoney = ticketSale * 120 - expenses;
  return totalMoney;
}

let ticketSale = calculateMoney(-4);
console.log(ticketSale);
