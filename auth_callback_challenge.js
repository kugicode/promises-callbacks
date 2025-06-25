// auth_callback_challenge.js (Clean Version)

function authenticateUser(username, password, callback) {
    // Simulate an asynchronous operation (e.g., checking a database)
    setTimeout(() => {
        const correctUsername = "admin";
        const correctPassword = "password123";

        // Check if credentials match
        if (username === correctUsername && password === correctPassword) {
            // Success case: no error, provide success message
            callback(null, `User '${username}' logged in successfully!`);
        } else {
            // Failure case: provide an Error object, no data
            callback(new Error("Invalid username or password."), null);
        }
    }, 1000); // Simulate 1-second delay
}

// --- How to use it ---

// Scenario 1: Correct credentials
authenticateUser("admin", "password123", (err, message) => {
    if (err) {
        console.error("Login attempt failed:", err.message);
    } else {
        console.log("Login successful:", message);
    }
});

// Scenario 2: Incorrect credentials
authenticateUser("user", "wrongpass", (err, message) => {
    if (err) {
        console.error("Login attempt failed:", err.message);
    } else {
        // This 'else' block will ideally not run if the function correctly passes an error.
        // It's good practice to ensure your logic always passes an error for failure.
        console.log("Unexpected success for wrong credentials:", message);
    }
});

// Scenario 3: Another incorrect attempt
authenticateUser("admin", "incorrect_password", (err, message) => {
    if (err) {
        console.error("Login attempt failed:", err.message);
    } else {
        console.log("Unexpected success for partial credentials:", message);
    }
});