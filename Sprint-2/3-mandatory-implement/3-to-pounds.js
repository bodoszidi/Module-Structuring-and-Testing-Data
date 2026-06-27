// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function convertToPound(srt) {
  const penceStringWithoutTrailingP = srt.substring(0, srt.length - 1);

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  return pounds;
}

function convertToPence(srt) {
  const penceStringWithoutTrailingP = srt.substring(0, srt.length - 1);

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  return pence;
}

console.log(`£${convertToPound("399p")}.${convertToPence("399p")}`);
