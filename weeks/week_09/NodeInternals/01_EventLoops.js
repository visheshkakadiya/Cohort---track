// setTimeout(() => console.log("Timeout"), 0);
// setImmediate(() => console.log("Immediate"));
// Promise.resolve().then(() => console.log("Promise"));
// process.nextTick(() => console.log("Next Tick"));
// Next Tick
// Promise  
// Timeout  
// Immediate


// const fs = require("fs");

// fs.readFile(__filename, () => {
//   setTimeout(() => console.log("Timeout inside I/O"), 0);
//   setImmediate(() => console.log("Immediate inside I/O"));
// });

// setTimeout(() => console.log("Timeout outside I/O"), 0);
// setImmediate(() => console.log("Immediate outside I/O"));





const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("I/O callback");

  setTimeout(() => console.log("Timeout inside I/O"), 0);
  setImmediate(() => console.log("Immediate inside I/O"));
  
  process.nextTick(() => console.log("Next Tick inside I/O"));
  Promise.resolve().then(() => console.log("Promise inside I/O"));
});

console.log("Sync code");

process.nextTick(() => console.log("Next Tick outside I/O"));
Promise.resolve().then(() => console.log("Promise outside I/O"));

setTimeout(() => console.log("Timeout outside I/O"), 0);
setImmediate(() => console.log("Immediate outside I/O"));
