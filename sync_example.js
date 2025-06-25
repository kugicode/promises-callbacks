// Function A: Takes a number and a callback function as arguments
function processNumber(num, myCallbackFunction) {
  console.log("Inside processNumber: I received the number:", num);

  // Perform some operation
  const result = num * 2;

  console.log("Inside processNumber: I've processed the number, result is:", result);

  // Now, I'm going to 'call back' the function that was given to me
  // I'm passing the 'result' to it.
  myCallbackFunction(result); // <-- This is where the callback is executed
}

// Function B: This is the callback function
function handleResult(finalValue) {
  console.log("Inside handleResult (the callback): The final value is:", finalValue);
}

console.log("--- Program Start ---");

// Call processNumber, and pass handleResult (the function itself!) as the second argument
// Notice we pass `handleResult` without parentheses, because we are passing the function reference,
// not calling it immediately.
processNumber(5, handleResult);

console.log("--- Program End ---");