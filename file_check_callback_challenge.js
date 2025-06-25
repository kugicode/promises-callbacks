// Create a new file, e.g., 'file_check_callback_challenge.js'

// Your code goes here!

function checkFileExists(filePath, callback){

    setTimeout(() => {
        const exsits =  filePath.endsWith(".txt") || Math.random() < 0.7;

        if (exsits){
            callback(null, `File found!`);
        }
        else{
            callback(new Error("File not found!"), null);
        }
    }, Math.floor(Math.random()*2) + 1)
}

// Example of how you might call it:
checkFileExists("my_document.txt", (err, status) => {
  if (err) {
    console.error("Check failed:", err.message);
  } else {
    console.log("Check successful:", status);
  }
});

checkFileExists("non_existent_image.png", (err, status) => {
  // ... handle response ...
  if (err){
    console.error("Check failed:", err.message)
  }
  else{
    console.log("Check was somewhat sucessful...:", status);
  }
});