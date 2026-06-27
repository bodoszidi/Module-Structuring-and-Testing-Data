// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
  //the function is there to convert the given number to percentage

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
  //the function is there to convert the given number to percentage
  //the error will come up again as the decimalNumber has already been declared - we don't need to assign this as a variable again
  //the console log missing the assigned number with the brackets
  //also we would need to call the function not the parameter


// Finally, correct the code to fix the problem
// =============> write your new code here
//function convertToPercentage(decimalNumber) {
  // decimalNumber = 0.5;
  //const percentage = `${decimalNumber * 100}%`;

  //return percentage;
//}

//console.log(convertToPercentage(decimalNumber));
