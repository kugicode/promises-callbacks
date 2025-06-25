// Create a new file, e.g., 'save_file_callback.js'

// Your code goes here!
function fetchData(callback){
console.log("Starting data fetch!");

setTimeout(() => {
    console.log("Data fetched!");
    const msg = "Hello, World!";
    callback(null, msg);
}, 2000);
}

console.log("Program started!");
// Example of how you might call it:
fetchData((err, msg) => {
  if (err) {
    console.error("Failed:", err.message);
  } else {
    console.log("Success:", msg);
  }
});