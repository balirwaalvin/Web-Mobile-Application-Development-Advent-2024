// Prices of the three products
const Apples = 50000; 
const Oranges = 35000;
const Mangoes = 25000;

// Calculating the total price from the products
const totalPrice = Apples + Oranges + Mangoes;

// Checking if the discount is applicable
if (totalPrice > 100000) {
  console.log("Congrats! You qualify for a discount.");
} else {
  console.log("Your total price is UGX", totalPrice, ". You do not qualify for a discount. Please purchase more items.");
} 
