// for (let index = 1; index <= 99; index += 2) {
//   console.log(index);
// }

// for (let index = 2; index <= 99; index += 2) {
//   console.log(index);
// }

// let rlSync = require('readline-sync');
// let length = Number(rlSync.question('Enter the length of the room in meters:\n'));
// let width = Number(rlSync.question('Enter the width of the room in meters:\n'));
// let areaInMeters = length * width;
// let areaInFeet = areaInMeters * 10.7639;
// console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`);

// let rlSync = require('readline-sync');
// let bill = Number(rlSync.question('What is the bill? '));
// let tipPercentage = Number(rlSync.question('What is the tip percentage? '));
// console.log();
// let tip = bill * (tipPercentage / 100);
// let total = bill + tip;
// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);

// let rlSync = require('readline-sync');
// let int = Number(rlSync.question('Please enter an integer greater than 0: '));
// let operator = rlSync.question('Enter "s" to compute the sum, or "p" to comput the product. ');

// if (operator === 's') {
//   let sum = 0;
//   for (let index = 1; index <= int; index++) {
//     sum += index;
//   }
//   console.log(`The sum of the intergers between 1 and ${int} is ${sum}.`);
// } else if (operator === 'p') {
//   let product = 1;
//   for (let index = 1; index <= int; index++) {
//     product *= index;
//   }
//   console.log(`The product of the intergers between 1 and ${int} is ${product}.`);
// }

// let shortLongShort = function(str1, str2) {
//   if (str1.length > str2.length) {
//     return str2 + str1 + str2;
//   } else {
//     return str1 + str2 + str1;
//   }
// };

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

// function isLeapYear(year) {
//   if (year < 1752) {
//     return year % 4 === 0;
//   } else if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else {
//     return year % 4 === 0;
//   }
// }

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true

// function multisum(int) {
//   let sum = 0;
  
//   for (let index = 1; index <= int; index++) {
//     if (index % 3 === 0 || index % 5 === 0) {
//       sum += index; 
//     }
//   }
  
//   return sum;
// }



// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168

// function utf16Value(message) {
//   let sum = 0;
  
//   for (let index = 0; index < message.length; index++){
//     sum += message.charCodeAt(index);
//   }
//   console.log(sum);
// }

// utf16Value('Four score');         // 984
// utf16Value('Launch School');      // 1251
// utf16Value('a');                  // 97
// utf16Value('');                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811