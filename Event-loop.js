const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();

setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('ImmadiateTimer 1 finished'));

fs.readFile("test-file.txt", () => {
    console.log("I/0 finished");
    console.log("----------------------------------------------------------------")
    setTimeout(() => console.log('Timer 1 finished'), 0);
    setImmediate(() => console.log('ImmadiateTimer 1 finished'), 3000);


    process.nextTick(() => console.log('process.nexttick'))
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password encrypted");
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password encrypted");
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password encrypted");
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password encrypted");
    });
})

console.log("Hello from the top level code");