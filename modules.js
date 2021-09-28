// console.log(arguments);
// console.log(require('module').wrapper);


//module.exports 
const C = require('./test-module-1');

const cal1 = new C();
console.log(cal1.add(2, 5));

//exports;