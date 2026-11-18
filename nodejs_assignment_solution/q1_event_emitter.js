// Q1: School Bell System using EventEmitter and Node.js Event Loop

const EventEmitter = require("events");
const schoolBell = new EventEmitter();

// Create event listeners
schoolBell.on("classStart", () => {
    console.log("Class has started. Please be seated!");
});

schoolBell.on("classEnd", () => {
    console.log("Class has ended. You may leave.");
});

// Trigger the events
schoolBell.emit("classStart");
schoolBell.emit("classEnd");

// Demonstrate the order of execution in the Node.js event loop
console.log("1. Synchronous message");

setTimeout(() => {
    console.log("4. setTimeout: Ring bell!");
}, 0);

setImmediate(() => {
    console.log("5. setImmediate: Ring bell!");
});

process.nextTick(() => {
    console.log("2. process.nextTick: Ring bell!");
});

console.log("3. Another synchronous message");

// Note: process.nextTick runs before timer/immediate callbacks.
// The relative order of setTimeout(0) and setImmediate() at the top
// level can vary depending on the Node.js environment.
