// let min = 20;
// let max = 200;

// let age = min + Math.floor((Math.random() * (max - min + 1)));

// console.log(`Teddy is ${age} years old!`);
// let rlSync = require('readline-sync');

// let num1 = rlSync.question('Enter the 1st number: ');
// let num2 = rlSync.question('Enter the 2nd number: ');
// let num3 = rlSync.question('Enter the 3rd number: ');
// let num4 = rlSync.question('Enter the 4th number: ');
// let num5 = rlSync.question('Enter the 5th number: ');
// let num6 = rlSync.question('Enter the last number: ');

// let arr = [num1, num2, num3, num4, num5];
// if (arr.includes(num6)) {
//   console.log(`The number ${num6} appears in [${arr.join(', ')}].`);
// } else {
//   console.log(`The number ${num6} does not appear in [${arr.join(', ')}].`);
// }

// let rlsync = require('readline-sync');
// let age =Number(rlsync.question('What is your age? '));
// let retireAge = Number(rlsync.question('At what age would you like to retire? '));
// let yearsLeft = retireAge - age;
// let year = new Date().getFullYear();
// let retireYear = year + yearsLeft;

// console.log(`It's ${year}. You will retire in ${retireYear}.`);
// console.log(`You have only ${yearsLeft} years of work to go!`);

// function isPalindrome(string) {
//   let str2 = string.split('').reverse().join('');
//   return string === str2;
// }

// // isPalindrome('madam');               // true
// // isPalindrome('Madam');               // false (case matters)
// // isPalindrome("madam i'm adam");      // false (all characters matter)
// // isPalindrome('356653');              // true

// function isRealPalindrome(string) {
//   string = string.toLowerCase();
//   string = string.split('');
//   let newStr = string.filter(char => char.match(/[a-zA-Z0-9]/));

//   console.log(isPalindrome(newStr.join('')));
// }
// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
// isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false

// function isPalindromicNumber(num) {
//   console.log(isPalindrome(String(num)));
// }
// isPalindromicNumber(34543);        // true
// isPalindromicNumber(123210);       // false
// isPalindromicNumber(22);           // true
// isPalindromicNumber(5);            // true

// function runningTotal(arr) {
//   let sum = 0;
  
//   let returnArray = arr.map((num) => {
//     sum += num;
//     return sum;
//   });
  
//   console.log(returnArray);
// }

// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

// function swap(string) {
//   let strArr = string.split(' ');
  
//   strArr = strArr.map((word) => {
//     word = word.split('');
//     let temp = word[0];
//     word[0] = word[word.length - 1];
//     word[word.length - 1] = temp;
//     return word.join('');
//   });
  
//   return strArr.join(' ');
// }

// console.log(swap('Oh what a wonderful day it is') === "hO thaw a londerfuw yad ti si");  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde') === "ebcdA");                          // "ebcdA"
// console.log(swap('a') === 'a');                              // "a"

// function removeNonLetters(word) {
//   let str = '';
  
//   for (let index = 0; index < word.length; index++) {
//     if (word[index].match(/[^a-zA-Z]/)) {
//       continue;
//     }
//     str += word[index];
//   }
  
//   return str;
// }

// function wordSizes(string) {
//   if (string === '') {
//     return {};
//   }
//   let returnObj = {};
//   string = string.split(' ');
  
//   string.forEach((word) => {
//     word = removeNonLetters(word);
//     if (returnObj[word.length]) {
//       returnObj[word.length] += 1;
//     } else {
//       returnObj[word.length] = 1;
//     }
//   });
  
//   return returnObj;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
// console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
// console.log(wordSizes(''));                                            // {}