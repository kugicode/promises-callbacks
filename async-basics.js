// // A function that simulates an asynchronous operation (e.g., fetching data)
// function fetchDataWithCallback(callback) {
//   console.log("Starting data fetch...");
//   // Simulate a network request taking 2 seconds
//   setTimeout(() => {
//     const data = { id: 1, message: "Data fetched successfully!" };
//     console.log("Data fetched!");
//     callback(null, data); // Call the callback: first arg is error (null if no error), second is data
//   }, 2000); // 2000 milliseconds = 2 seconds
// }

// console.log("Program started.");

// // Call the function, passing a callback function
// fetchDataWithCallback((error, data) => {
//   if (error) {
//     console.error("Error fetching data:", error);
//   } else {
//     console.log("Received data from callback:", data);
//   }
// });

// console.log("Program continues immediately (non-blocking).");
// // This line will print before "Data fetched!" because fetchDataWithCallback is asynchronous.









// --- Function 1: The main asynchronous operation wrapper ---
function fetchDataWithCallback(callbackFromCaller) { // 'callbackFromCaller' is the first callback being passed in
  console.log("Starting data fetch...");

  // --- Function 2: The callback given to setTimeout (this is an anonymous function) ---
  setTimeout(() => { // The '=> { ... }' part defines this function
    const data = { id: 1, message: "Data fetched successfully!" };
    console.log("Data fetched!");
    
    // Here, Function 1 (fetchDataWithCallback) is calling Function 3
    callbackFromCaller(null, data); // This executes the callback that was passed to fetchDataWithCallback
  }, 2000); // 2000 milliseconds = 2 seconds
}

// --- Function 3: The callback function WE are defining to handle the result ---
// This is also an anonymous (arrow) function
const myResultHandler = (error, data) => { // This defines Function 3
  if (error) {
    console.error("Error fetching data:", error);
  } else {
    console.log("Received data from callback (from Function 3):", data);
  }
};


console.log("Program started.");

// Here, we are calling Function 1 (fetchDataWithCallback)
// AND we are passing Function 3 (myResultHandler) as an argument to it.
fetchDataWithCallback(myResultHandler); // <-- Passing Function 3 to Function 1

console.log("Program continues immediately (non-blocking).");