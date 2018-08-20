// isNaN = is Not a Number

const isNaN123 = isNaN(123);
const isNaNMinus123 = isNaN(-123);
const isNaN234 = isNaN(`123`);
const isNaNHello = isNaN('hello');

console.log('isNaN123 : ', isNaN123);   // false
console.log('isNaNMinus123 : ', isNaNMinus123);    // false
console.log('isNaN234 : ', isNaN234);    // false
console.log('isNaNHello : ', isNaNHello);   // true