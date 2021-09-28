// console.log(arguments);
// console.log(require('module').wrapper);


//module.exports 
const C = require('./test-module-1');

const cal1 = new C();
console.log(cal1.add(2, 5));

//exports;

const cal2 = require('./test-module-2');
console.log(cal2.add(2, 5));