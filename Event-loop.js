const fs = require("fs");

setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('ImmadiateTimer 1 finished'));

fs.readFile("test-file.txt", () => {
    console.log("I/0 finished");
})

console.log("Hello from the top level code");