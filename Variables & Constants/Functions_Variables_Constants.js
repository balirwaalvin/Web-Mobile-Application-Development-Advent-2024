//var
// A variable declared with "var" is accessible within the entire function it's declared in, or globally if declared outside any function.
//You can reassign values to "var" variables without any issues.

//EXAMPLE USAGE
function our_test() {
    var first_test = "This is Test One";
    console.log(first_test);

    first_test = "Thanks for the Test";
    console.log(first_test);
}

//let
//This means a variable declared with "let" is only accessible within the braces {} of the block it's declared in.
//You can reassign values to "let" variables.

//EXAMPLE USAGE
function first_Let() {
    if (true) {
        let my_test = 5;
        console.log(my_test); 

        my_test = 10;
        console.log(my_test);
    } 
    // console.log(myLet); // Error: myLet is not defined (outside the block)
}

//const (Constant)
//This is much similar to let whereby your are not allowed to assign a value to a const variable.
//You cannot change it. Attempting to do so will throw a TypeError.

//EXAMPLE USAGE
function try_Const() {
    const MY_CONST = "No Change";
    console.log(MY_CONST);

    MY_CONST = "Please Change"; //  TypeError: Assignment to constant variable.
}


