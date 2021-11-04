// Adding yargs
const yargs = require('yargs/yargs');
const toppings = yargs(process.argv).argv;

let total = 10;

// Calculates total
const pizzaCalc = function() {
  // If undefined do nothing
  if (!toppings.t1) {
  } else if (toppings.t1.toString().toUpperCase() === 'CHEESE' || toppings.t1.toString().toUpperCase() === 'PINEAPPLE') {
    total += 2;
  } else if (toppings.t1.toString().toUpperCase() === 'PEPPERONI' || toppings.t1.toString().toUpperCase() === 'CHICKEN') {
    total += 3;
  } else {
    // Throws error if invalid topping
    throw new Error("Please enodnter a valid topping");
  }
  
  // If undefined do nothing
  if (!toppings.t2) {
  } else if (toppings.t2.toString().toUpperCase() === 'CHEESE' || toppings.t2.toString().toUpperCase() === 'PINEAPPLE') {
    total += 2;
  } else if (toppings.t2.toString().toUpperCase() === 'PEPPERONI' || toppings.t2.toString().toUpperCase() === 'CHICKEN') {
    total += 3;
  } else {
    // Throws error if invalid topping
    throw new Error("Please enter a valid topping");
  }
}

try {
  pizzaCalc();
  console.log("The total for your pizza is: $" + total);
} catch (e) {
  console.log(e);
}






