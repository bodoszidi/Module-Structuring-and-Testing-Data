const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
//
// 3.const penceStringWithoutTrailingP = penceString.substring(
//  0,
//  penceString.length - 1
// ); assigned the string to a new variable with out the P - by using the substring method - the .length will count the number of the characters and only display 1 before last
//
// 8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); 
// using the pedStart method we ensure to fill the gas - we can add 0 on this occasion to our string beginning the the number of length does not match with 3 characters - fill in the gaps
// 9. const pounds = paddedPenceNumberString.substring(
//  0,
// paddedPenceNumberString.length - 2
//); again we create a new variable to only store the first character of the string 
//  
// 14. const pence = paddedPenceNumberString
//  .substring(paddedPenceNumberString.length - 2)
//  .padEnd(2, "0");
// creating a new variable to assign only the last two character of the string - we also use the padEnd method to fill the end gaps with zeros
//
// 18. we call the newly created variables with consol.log to display this as a new string on the console