// Predict and explain first...
  // the function should get the last digit of the given parameter - 
  // but the parameter is the already existing variable

// Predict the output of the following code:
// =============> Write your prediction here
  //already assigned variable num will be returned as we not defined the parameter inside the return


const num = 103;


function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
  //every time we call the function we return the same number as this is already assigned inside line 10
// Explain why the output is the way it is
// =============> write your explanation here
  //we need to give the parameter to the function to be able to use the arguments in the console log
// Finally, correct the code to fix the problem
// =============> write your new code here
  //const num = 103;


  //function getLastDigit(num) {
  //return num.toString().slice(-1);
  //}

  //console.log(`The last digit of 42 is ${getLastDigit(42)}`);
  //console.log(`The last digit of 105 is ${getLastDigit(105)}`);
  //console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
