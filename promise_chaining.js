// promise_chaining.js

// Simulate fetching a user (returns a Promise)
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching user ${userId}...`);
    setTimeout(() => {
      if (userId === 123) {
        resolve({ id: 123, name: "Alice" });
      } else {
        reject(new Error("User not found!"));
      }
    }, 1000);
  });
}

// Simulate fetching posts for a user (returns a Promise)
function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching posts for user ${userId}...`);
    setTimeout(() => {
      if (userId === 123) {
        resolve([
          { id: 1, title: "My First Post" },
          { id: 2, title: "Learning Node.js" }
        ]);
      } else {
        reject(new Error("No posts found for user!"));
      }
    }, 800);
  });
}

// Simulate fetching comments for a post (returns a Promise)
function fetchComments(postId) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching comments for post ${postId}...`);
    setTimeout(() => {
      if (postId === 1) {
        resolve([
          { id: 101, text: "Great post!" },
          { id: 102, text: "Very helpful." }
        ]);
      } else {
        reject(new Error("No comments found for post!"));
      }
    }, 600);
  });
}

console.log("--- Starting Promise Chain Example ---");

// Start the chain
fetchUser(123) // Step 1: Fetch user
  .then(user => {
    console.log("User fetched:", user.name);
    return fetchPosts(user.id); // Step 2: Return a new Promise to fetch posts
  })
  .then(posts => {
    console.log("Posts fetched:", posts.length, "posts");
    if (posts.length > 0) {
      return fetchComments(posts[0].id); // Step 3: Return a new Promise to fetch comments for the first post
    } else {
      throw new Error("No posts to fetch comments for."); // If no posts, throw an error to trigger .catch
    }
  })
  .then(comments => {
    console.log("Comments fetched:", comments.length, "comments");
    console.log("First comment:", comments[0].text);
  })
  .catch(error => { // Catches any error from any step in the chain
    console.error("An error occurred in the Promise chain:", error.message);
  })
  .finally(() => { // Optional: runs regardless of success or failure
    console.log("--- Promise Chain Finished ---");
  });

console.log("Program continues immediately after chain setup.");