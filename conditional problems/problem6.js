//* problem 6

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 9;

const ticket = 800;

if (age < 10) {
  console.log("Ticket is Free");
} else {
  if (age < 18) {
    console.log("Your ticket price:", ticket / 2);
  } else {
    if (age >= 60) {
      console.log("Your ticket price:", ticket * 0.15);
    } else {
      console.log("Your ticket price:", ticket);
    }
  }
}
