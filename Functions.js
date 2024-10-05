//Functions without Parameters
//Void Function
function summation(){
    var num_one = 45;

    var num_two = 6;

    var sum_five = num_one + num_two;

    console.log("Sum five;",sum_five);
}

summation();

//Returnung function
function summation_two(){
    var num_three = 55;

    var num_four = 8;

    var sum_six = num_three + num_four;

    return sum_six;
}

//Printing the value directly to the terminal
console.log("Sum six:",summation_two())

//Assigning the value to a variable
var sum_six = summation_two();

console.log("Sum six:",sum_six)

//Functions with parameters
//Void functions with parameters
function summation_three(num_one,num_two){

   var sum_seven = num_one + num_two;

   console.log("This is a summation three adding" ,num_one,"+",num_two,"=",sum_seven);
}
summation_three(78,9)

summation_three(65,78)

//Returning functions with parameters
function summation_four(num_one,num_two){

    var sum_eight = num_one + num_two;

    // OR return num_one + num_two;

    return sum_eight;
}
//Printing the value directly to the terminal
console.log("Sum eight:",summation_four(125,56))

//Assignment
function greetings(Sanyu) {
    console.log("Oli Otya," + Sanyu + "?");
  }

//Write a function calculateProfit that accepts the selling price, cost price, and number of units sold and returns the profit for a small business selling products like maize flour
function calculateProfit(sellingPrice, costPrice, unitsSold) {
    // Calculate the profit per unit.
    const profitPerUnit = sellingPrice - costPrice;
  
    // Calculate the total profit.
    const totalProfit = profitPerUnit * unitsSold;
  
    // Return the total profit.
    return totalProfit;
  }
  
  // Example usage:
  const sellingPrice = 10;
  const costPrice = 5;
  const unitsSold = 100;
  
  const profit = calculateProfit(sellingPrice, costPrice, unitsSold);
  
  console.log("The profit is:", profit); // Output: The profit is: 500
  
