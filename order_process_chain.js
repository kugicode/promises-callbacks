// Create a new file, e.g., 'order_process_chain.js'

// Part 1: Your Promise-returning functions here (checkInventory, processPayment, dispatchOrder)
function checkInventory(itemID){
    return new Promise((resolve, reject) => {

        setTimeout (() => {
            if(itemID === 'LAPTOP'){
                resolve("Laptop is in stock!");
            }
            else{
                reject(new Error("Item out of stock."));
            }

        },1000);

    })
}

function processPayment(amount){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (amount > 0){
                resolve(`Payment successful for $${amount}!`);
            }
            else {
                reject(new Error("Invalid payment amount."));
            }
        },1500);
    })
}

function dispatchOrder(orderId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (`Order ${orderId} has been dispatched!`);
        },800);
    });
}

// Part 2: Your Promise Chain here
// Example start:
checkInventory("LAPTOP")
  .then((inventoryStatus) => {
    console.log(inventoryStatus);
    // What do you return here to call processPayment?
    // return ...
    return processPayment(1200);
  })
  .then(Payments =>{
    console.log(Payments)
    return dispatchOrder("ORD12345");
  })
  .then(id => {
    console.log(id)
  })
  // ... rest of the chain
  .catch(error => {
    console.error("Order process failed:", error.message);
  })
  .finally(() => {
    console.log("Order process finished.");
  });