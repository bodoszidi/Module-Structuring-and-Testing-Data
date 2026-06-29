function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;

  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============>
// the function formatTImeDisplay calls 3 times the pad function -pad(totalHours) pad(remainingMinutes) pad(remainingSeconds)

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> the number 0 = which is the calculation of  const totalHours = (totalMinutes - remainingMinutes) / 60;

// c) What is the return value of pad is called for the first time?
// =============> "00" = the function pad(-receives the number 0 or the value of totalHours) and converts this to a string =
// than the while loop kicks in and runs while the conditions is true and exit once it returns as false
// numString = "0" + numString; this line will add a a "0" to our new string if our condition is true - (numString.length < 2)

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> number 1 - the calculation of const remainingSeconds = seconds % 60;

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> "01" pad(1) - converts to a string "1" and adds the "0" + with the while loop to our newly created string
