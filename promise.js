// promise_basics.js

// Function that returns a Promise (instead of taking a callback directly)
function fetchDataWithPromise() {
  console.log("Starting data fetch (Promise version)...");

  // The Promise constructor takes an 'executor' function with 'resolve' and 'reject'
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., network request, file read)
    setTimeout(() => {
      // Simulate a random success or failure
      const success = Math.random() > 0.3; // Roughly 70% chance of success

      if (success) {
        const data = { id: 101, message: "Data fetched successfully via Promise!" };
        console.log("Internal: Data is ready!");
        resolve(data); // If successful, call resolve with the data
      } else {
        const error = new Error("Failed to fetch data via Promise! Network issue.");
        console.error("Internal: Error occurred during fetch!");
        reject(error); // If failed, call reject with an Error object
      }
    }, 1500); // Simulate 1.5 seconds delay
  });
}

console.log("Program started. Calling fetchDataWithPromise...");

// --- Consuming the Promise ---

// Call the function, which immediately returns a Promise object.
// Then, attach handlers for when that Promise resolves or rejects.
fetchDataWithPromise()
  .then(data => { // This function runs ONLY if the Promise resolves successfully
    console.log("Received data (Success!):", data);
  })
  .catch(error => { // This function runs ONLY if the Promise rejects (an error occurs)
    console.error("Error occurred (Failure!):", error.message);
  });

console.log("Program continues immediately (non-blocking after promise setup).");
// This line will still print immediately because setting up the Promise is non-blocking.