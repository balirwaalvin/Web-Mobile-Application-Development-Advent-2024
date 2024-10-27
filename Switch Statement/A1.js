// Getting the network code from the user
let netCode = 1; 

// Using a switch statement to determine the call rate
switch (netCode) {
    // MTN
    case 1: 
    console.log("MTN call rate is UGX 2.5 per second");
    break;
  // Airtel
    case 2: 
    console.log("Airtel call rate is UGX 3 per second");
    break;
 // Africell
  case 3: 
    console.log("Africell call rate is UGX 2 per second");
    break;
  default:
    console.log("Invalid network code.");
}
