// const { useCallback } = require("react");

console.log("This is the starting point of my code"); // synchronous code

process.nextTick(() => {
    console.log("This is process.nextTick"); // Asynchronous
});

setTimeout(() => { // callback function
    console.log("This is the first timeout function");
}, 6000);

console.log("This is the end point of my code"); // synchronous code

setTimeout(() => {
    console.log("This statement will run after 0 delay");
}, 0);

process.nextTick(() => {
    console.log("This is process.nextTick code");
});

new Promise((resolve, reject) => {
    let success = false;
    if (success)
        resolve("Data loaded successfully");
    else
        reject("something went wrong");
})
.then((data) => {
    console.log("Resolved:", data);
})
.catch((err) => {
    console.log("Caught error:", err); // handles the rejection so Node doesn't crash
});