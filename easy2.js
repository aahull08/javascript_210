// function crunch(message) {
//   let newMessage = '';
//   let idx2 = 0;
//   for (let idx1 = 0; idx1 < message.length; idx1++) {
//     if (idx1 === 0) {
//       newMessage += message[idx1];
//     } else if (message[idx1] !== newMessage[idx2]) {
//       newMessage += message[idx1];
//       idx2++;
//     }
//   }
//   console.log(newMessage);
// }


// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// function logInBox(string) {
//   const length = string.length;
//   console.log(`+${'-'.repeat(length + 2)}+`);
//   console.log(`|${' '.repeat(length + 2)}|`);
//   console.log(`| ${string} |`);
//   console.log(`|${' '.repeat(length + 2)}|`);
//   console.log(`+${'-'.repeat(length + 2)}+`);
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');

// function stringy(int) {
//   let message = '';
  
//   for (let index = 1; index <= int; index++) {
//     message += String(index % 2);
//   }
  
//   console.log(message);
// }

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// function findFibonacciIndexByLength(digits) {
//   let num1 = 1n;
//   let num2 = 1n;
//   let i;
//   for (i = 2n; String(num2).length < digits; i++) {
//     let sum = num1 + num2;
//     num1 = num2;
//     num2 = sum;
//   }
//   console.log(i);
// }


// findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;

// let triangle = function(size) {
//   for (let index = 1; index <= size; index++) {
//     console.log(' '.repeat(size - index) + '*'.repeat(index));
//   }
// };

// triangle(5);
// triangle(9);

// let rlSync = require('readline-sync');
// let noun = rlSync.question('Enter a noun: ');
// let verb = rlSync.question('Enter a verb: ');
// let adjective = rlSync.question('Enter a adjective: ');
// let adverb = rlSync.question('Enter a quickly: ');

// let message = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious`;
// console.log(message);

// function isDoubleNumber(num){
//   let numString = String(num);
//   let half = numString.length / 2;
//   if (numString.length % 2 === 1) {
//     return false;
//   }
//   for (let index = 0; index + half < numString.length; index++) {
//     if (numString[index] !== numString[half + index]) {
//       return false;
//     }
//   }
//   return true;
// }

// function isDoubleNumber(num) {
//   let numString = String(num);
//   let half = numString.length / 2;
//   return numString.slice(0, half) === numString.slice(half);
// }

// function twice(num) {
//   if (isDoubleNumber(num)) {
//     return num;
//   } else {
//     return num * 2;
//   }
// }


// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676


// function getGrade(score1, score2, score3) {
//   const NUMBER_OF_SCORES = 3;
//   let average = (score1 + score2 + score3) / NUMBER_OF_SCORES;
//   if (average >= 90) {
//     return 'A';
//   } else if (average >= 80) {
//     return 'B';
//   } else if (average >= 70) {
//     return 'C';
//   } else if (average >= 60) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// console.log(getGrade(95, 90, 93));    // "A"
// console.log(getGrade(50, 50, 95));    // "D"

// function cleanUp(string) {
//   let newString = '';
//   let trigger = true;
//   for (let index = 0; index < string.length; index++) {
    
//     if (string[index].match(/[a-zA-Z]/)) {
//       newString += string[index];
//       trigger = true;
//     } else if (trigger) {
//       newString += ' ';
//       trigger = false;
//     }
    
//   }
//   console.log(newString);
// }

// cleanUp("---what's my +*& line?");    // " what s my line "

// function ordinalCreater(int) {
//   let tens = int % 100;
//   let ones = int % 10;

//   if (ones === 0 || (tens >= 11 && tens <= 13)) {
//     return `${int}th`;
//   } else if (ones === 1) {
//     return `${int}st`;
//   } else if (ones === 2) {
//     return `${int}nd`;
//   } else if (ones === 3) {
//     return `${int}rd`;
//   } else {
//     return `${int}th`;
//   }
// }

// function century(year) {
//   let cenInt;
//   if (year % 100 === 0) {
//     cenInt = year / 100;
//   } else {
//     cenInt = Math.floor((year / 100)) + 1;
//   }
//   console.log(ordinalCreater(cenInt));
// }

// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"