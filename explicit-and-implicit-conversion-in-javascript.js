/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; //this looked correct to me and displayed how I expected. I added Number() to be more clear
console.log("The result is: " + result);

let isValid = Boolean("false");  //originally fixed at (let isValid = Boolean ("false"==false));)
if (isValid) {
    console.log("This is valid!");
} 
//After reading more about Boolean(), this is a "truthy" and that as long as there is something in the value of the Boolean() other than edge case. 

let age = "25";

let totalAge = Number(age) + 5; //turned the variable 'age' from string to number so the equation can work 
console.log("Total Age: " + totalAge);


//Part Two

//Implicit type conversion
let numofItems = 38;
console.log(`You have ${numofItems} items in your cart.`); //Template literal

//Explicit Type Conversion
let str = "72";
let num = Number(str); 

console.log(num); // converting to a number from string

//One edge case

let slicesofPizza = Boolean(null); //used null to for Boolean value and 'if()' to create output if returned true. If false, code shows the expected output.
  if (slicesofPizza) {
    console.log("There is currently no pizza!");
  }
console.log(slicesofPizza);
