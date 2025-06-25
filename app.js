// 1. Import the Express library
const express = require('express');

// 2. Create an instance of the Express application
const app = express();

// 3. Define the port your server will listen on
const PORT = 3000;

// 4. Define a basic route (an endpoint that responds to a GET request)
// When someone visits the root URL ("/") of your server,
// this function will execute.
app.get('/', (req, res) => {
  // 'req' is the request object (data from the client)
  // 'res' is the response object (data you send back to the client)
  res.send('Hello from your first Node.js Backend!'); // Send a simple text response
});

// 5. Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server.');
});