// Predict and explain first...
//  =============> write your prediction here
//the function is there for capitalise the given string

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello"))
// =============> write your explanation here
  // Identifier 'str' has already been declared - means the variable already exist - with the let you don't need to declare this again
// =============> write your new code here
  //function capitalise(str) {
  // str = `${str[0].toUpperCase()}${str.slice(1)}`;
  //return str;
  //}
