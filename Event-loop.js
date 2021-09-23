const fs = require("fs");
const crypto = require("crypto");

setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('ImmadiateTimer 1 finished'));

fs.readFile("test-file.txt", () => {
    console.log("I/0 finished");
    console.log("----------------------------------------------------------------")
    setTimeout(() => console.log('Timer 1 finished'), 0);
    setImmediate(() => console.log('ImmadiateTimer 1 finished'), 3000);


    process.nextTick(() => console.log('process.nexttick'))
    crypto.pbkdf2('password', 'salt');
})

console.log("Hello from the top level code");