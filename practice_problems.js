// function logOddNumbers(maxInt) {
//     for (let index = 1; index <= maxInt; index += 1) {
//         if (index % 2 === 0) {
//             continue
//         } 
        
//         console.log(index)
//     }
// }

// logOddNumbers(19);

// function multiplesOfThreeAndFive(startNum, endNum) {
//   for (let currentNumber = startNum; currentNumber <= endNum; currentNumber += 1) {
//     if (currentNumber % 15 === 0) {
//       console.log(currentNumber.toString() + '!');
//     } else if (currentNumber % 5 === 0 || currentNumber % 3 === 0) {
//       console.log(currentNumber.toString());
//     }
//   }
// }


// multiplesOfThreeAndFive(10, 50);

// // output on console
// // '3'
// // '5'
// // '6'
// // '9'
// // '10'
// // '12'
// // '15!'
// // … remainder of output omitted for brevity



// function logMultiples(num) {
//   let maxMult = Math.floor(100 / num) * num;
  
//   for (let index = maxMult; index >= num; index -= num) {
//     if (index % 2 === 1) {
//       console.log(index);
//     }
//   }
// }

// logMultiples(17);
// // // output (5x, 3x and 1x)
// // 85
// // 51
// // 17

// logMultiples(21);
// // // output (3x and 1x)
// // 63
// // 21


// let fizzbuzz = () => {
//   for (let index = 1; index <= 100; index++) {
//     let message = '';
    
//     if (index % 3 === 0) {
//       message += 'Fizz';
//     }
    
//     if (index % 5 === 0) {
//       message += 'Buzz';
//     }
    
//     console.log(message || index);
//   }
// };

// fizzbuzz();

// console output
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// … rest of output omitted for brevity

// iterate from 2 up until half of the number and if any remainder is 0 then return false else ruturn true.

// function isPrime(num) {
//   if (num < 2) return false;
//   let currentNumber = 2;
//   while (currentNumber <= Math.floor(num / 2)) {
//     if (num % currentNumber === 0) return false;
//     currentNumber += 1;
//   }
//   return true;
// }

// console.log(isPrime(1));   // false
// console.log(isPrime(2));   // true
// console.log(isPrime(3));   // true
// console.log(isPrime(43));  // true
// console.log(isPrime(55));  // false
// console.log(isPrime(0));   // false




//     return false;
//     return true;
//   if ((a && b) || (!a && !b)){
//   }
//   } else {
// console.log(isXor('2', 23));         // false
// console.log(isXor('a', undefined));  // true
// console.log(isXor(false, 3));        // true
// console.log(isXor(false, false));    // false
// console.log(isXor(false, true));     // true
// console.log(isXor(null, ''));        // false
// console.log(isXor(true, false));     // true
// console.log(isXor(true, true));      // false
// function isXor(a, b) {
// }
// const password = 'password';
// let rlSync = require('readline-sync');
// let count = 0;
// while (true) {
//   let answer = rlSync.question('What is the password:  ');
//   if (password === answer) {
//     console.log('You have successfully logged in.');
//     break;
//   }
//   count++;
//   if (count === 3) {
//     console.log('You have been denied access.');
//     break;
//   }
// }

// let rlSync = require('readline-sync');
// let scoreCount = 0;
// const numberOfScores = 3;
// let scoreArray = [];
// while (scoreCount < numberOfScores) {
//   scoreCount += 1;
//   let score = rlSync.question(`Enter score ${scoreCount}: `);
//   scoreArray.push(Number(score));
// }
// let sum = scoreArray.reduce(function (a, b) {
//   return a + b;
// });
// let average = sum / numberOfScores;
// let message = '';
// if (average >= 90) {
//   message = 'A';
// } else if (average >= 70) {
//   message = 'B';
// } else if (average >= 50) {
//   message = 'C';
// } else {
//   message = 'F';
// }

// console.log(`Based on the average of your ${numberOfScores} scores your letter grade is ${message}.`);

// function gcd(num1, num2){
//   let greatestCommonDivisor = 0;
//   let currentDivisor = 1;
//   while (currentDivisor <= num1 && currentDivisor <= num2){
//     if (num1 % currentDivisor === 0 && num2 % currentDivisor === 0) {
//       greatestCommonDivisor = currentDivisor;
//     }
//     currentDivisor += 1;
//   }
//   return greatestCommonDivisor;
// }


// console.log(gcd(12, 4));   // 4
// console.log(gcd(15, 10));  // 5
// console.log(gcd(9, 2));    // 1

// function isPrime(num) {
//   if (num < 2) return false;
  
//   let currentNumber = 2;
//   while (currentNumber <= Math.floor(num / 2)) {
//     if (num % currentNumber === 0) return false;
//     currentNumber += 1;
//   }
//   return true;
// }

// function checkGoldbach(expectedSum) {
//   if (expectedSum < 4 || expectedSum % 2 === 1) {
//     console.log('null');
//     return;
//   }
  
//   let half = expectedSum / 2;
  
//   for (let num1 = 1; num1 <= half; num1 += 1) {
//     let num2 = expectedSum - num1;
//     if (isPrime(num1) && isPrime(num2)) {
//       console.log(num1 + ' ' + num2);
//     }
//   }
// }

// checkGoldbach(3);
// // logs: null

// checkGoldbach(4);
// // logs: 2 2

// checkGoldbach(12);
// // logs: 5 7

// checkGoldbach(100);
// // logs:
// // 3 97
// // 11 89
// // 17 83
// // 29 71
// // 41 59
// // 47 53

// let generatePattern = function(nStars) {
//   for (let index = 1; index <= nStars; index += 1) {
//     let counter = 0;
//     let output = '';
//     while (counter < index) {
//       counter += 1;
//       output += counter;
//     }
//     output += '*'.repeat(nStars - index);
//     console.log(output);
//   }
// };

// generatePattern(11);


// function indexOf(firstString, secondString) {
//   const length = secondString.length;
//   for (let idx1 = 0; idx1 + length <= firstString.length; idx1++) {
//     let subStr = '';
//     for (let idx2 = 0; idx2 < length; idx2++){
//       subStr += firstString[idx1 + idx2];
//     }
//     if (subStr === secondString) {
//       return idx1;
//     }
//   }
//   return -1;
// }

// function lastIndexOf(firstString, secondString) {
//   const length = secondString.length;
//   let finIdx = -1;
//   for (let idx1 = 0; idx1 + length <= firstString.length; idx1++) {
//     let subStr = '';
//     for (let idx2 = 0; idx2 < length; idx2++){
//       subStr += firstString[idx1 + idx2];
//     }
//     if (subStr === secondString) {
//       finIdx = idx1;
//     }
//   }
//   return finIdx;
// }

// console.log(indexOf('Some strings', 's'));                      // 5
// console.log(indexOf('Blue Whale', 'Whale'));                    // 5
// console.log(indexOf('Blue Whale', 'Blute'));                    // -1
// console.log(indexOf('Blue Whale', 'leB'));                      // -1

// console.log(lastIndexOf('Some strings', 's'));                  // 11
// console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
// console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1

// function trim(string) {
//   let firstIdx = 0;
//   for (let idx1 = 0; idx1 < string.length; idx1++) {
//     if (string[idx1] !== ' ') {
//       firstIdx = idx1;
//       break;
//     }
//   }
//   let secondIdx = 0;
//   for (let idx2 = string.length - 1; idx2 >= firstIdx; idx2--) {
//     if (string[idx2] !== ' ') {
//       secondIdx = idx2;
//       break;
//     }
//   }
//   if (firstIdx === 0 && secondIdx === 0){
//     return '';
//   }
//   let strippedStr = '';
//   while (firstIdx <= secondIdx) {
//     strippedStr += string[firstIdx];
//     firstIdx++;
//   }
//   return strippedStr;
// }

// console.log(trim('  abc  '));  // "abc"
// console.log(trim('abc   '));   // "abc"
// console.log(trim(' ab c'));    // "ab c"
// console.log(trim(' a b  c'));  // "a b  c"
// console.log(trim('      '));   // ""
// console.log(trim(''));
// console.log(trim('    a    '));// ""

// function splitString(string, delimiter) {
//   if (delimiter === undefined) {
//     console.log('Error: No delimiter');
//     return;
//   }
  
//   let substring = '';
//   for (let index = 0; index < string.length; index++){
//     if (string[index] === delimiter) {
//       console.log(substring);
//       substring = '';
//     } else if (delimiter === '') {
//       console.log(string[index]);
//     } else {
//       substring += string[index];
//     }
//   }
  
//   if (substring) {
//     console.log(substring);
//   }
// }

// splitString('abc,123,hello world', ',');
// // logs:
// // abc
// // 123
// // hello world

// splitString('hello');
// // logs:
// // ERROR: No delimiter

// splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o

// splitString('hello', ';');
// // logs:
// // hello

// splitString(';hello;', ';');
// // logs:
// //  (this is a blank line)
// // hello

// function repeat(string, times) {
//   if (times < 0 || typeof(times) !== 'number') {
//     return undefined;
//   }
  
//   let repeatedString = '';
//   for (let index = 1; index <= times; index++) {
//     repeatedString += string;
//   }
  
//   return repeatedString;
// }

// console.log(repeat('abc', 1));       // "abc"
// console.log(repeat('abc', 2));       // "abcabc"
// console.log(repeat('abc', -1));      // undefined
// console.log(repeat('abc', 0));       // ""
// console.log(repeat('abc', 'a'));     // undefined
// console.log(repeat('abc', false));   // undefined
// console.log(repeat('abc', null));    // undefined
// console.log(repeat('abc', '  '));    // undefined

// function startsWith(string, searchString) {
//   for (let index = 0; index < searchString.length; index++) {
//     if (string[index] !== searchString[index]) {
//       return false;
//     }
//   }
  
//   return true;
// }

// let str = 'We put comprehension and mastery above all else';
// console.log(startsWith(str, 'We'));              // true
// console.log(startsWith(str, 'We put'));          // true
// console.log(startsWith(str, ''));                // true
// console.log(startsWith(str, 'put'));             // false

// let longerString = 'We put comprehension and mastery above all else!';
// console.log(startsWith(str, longerString));      // false

// function toLowerCase(string) {
//   let lowerString = '';
//   for (let index = 0; index < string.length; index++) {
//     let asciiNumeric = string[index].charCodeAt(0);
//     if (asciiNumeric >= 65 && asciiNumeric <= 90) {
//       asciiNumeric += 32;
//     }
//     lowerString += String.fromCharCode(asciiNumeric);
//   }
  
//   return lowerString;
// }

// console.log(toLowerCase('ALPHABET'));    // "alphabet"
// console.log(toLowerCase('123'));         // "123"
// console.log(toLowerCase('abcDEF'));      // "abcdef"

// function substr(string, start, length) {
//   if (start < 0) {
//     start = string.length + start;
//   }
  
//   let substring = '';
//   for (let size = 0; size < length; size++) {
//     substring += string[start];
//     start++;
//     if (start >= string.length) {
//       break;
//     }
//   }
  
//   return substring;
// }

// let string = 'hello world';

// console.log(substr(string, 2, 4));      // "llo "
// console.log(substr(string, -3, 2));     // "rl"
// console.log(substr(string, 8, 20));     // "rld"
// console.log(substr(string, 0, -20));    // ""
// console.log(substr(string, 0, 0));      // ""

// function substring(string, start, end) {
//   if (end === undefined) {
//     end = string.length;
//   }

//   if (start < 0 || typeof(start) !== 'number') {
//     start = 0;
//   }
  
//   if (end < 0 || typeof(start) !== 'number') {
//     end = 0;
//   }
  
//   if (end < start) {
//     let temp = end;
//     end = start; 
//     start = temp;
//   }
  
//   let newstring = '';
//   for (let index = 0; index < (end - start); index++) {
//     newstring += string[start + index];
//     if (start + index >= string.length - 1) {
//       break;
//     }
//   }
  
//   console.log(newstring);
// }

// let string = 'hello world';

// substring(string, 2, 4);    // "ll"
// substring(string, 4, 2);    // "ll"
// substring(string, 0, -1);   // ""
// substring(string, 2);       // "llo world"
// substring(string, 'a');     // "hello world"
// substring(string, 8, 20);   // "rld"
// substring(string, 5, 5);   // ""