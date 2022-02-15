// function repeater(string) {
//   let result = '';
  
//   for (let index = 0; index < string.length; index++){

//     if (string[index].match(/[A-Za-z]/) && !checkChar(string[index])) {
//       result += string[index] + string[index];
//     } else {
//       result += string[index];
//     }
//   }
  
//   console.log(result);
// }

// function checkChar(char) {
//   char = char.toLowerCase();
//   return char === 'a' ||
//   char === 'e' ||
//   char === 'i' ||
//   char === 'o' ||
//   char === 'u';
// }


// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""

// repeater('String');          // "SSttrrinngg"
// repeater('Hello-World!');    // "HHellllo-WWorrlldd!"
// repeater('July 4th');        // "JJullyy 4tthh"
// repeater('');                // ""

// function reverseNumber(num) {
//   let numStr = String(num);
//   return Number(numStr.split('').reverse().join(''));
// }

// console.log(reverseNumber(12345));    // 54321
// console.log(reverseNumber(12213));    // 31221
// console.log(reverseNumber(456));      // 654
// console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
// console.log(reverseNumber(1));        // 1

// function centerOf(string) {
//   let middle = Math.floor(string.length / 2);
//   if (string.length % 2 === 1) {
//     console.log(string[middle]);
//   } else {
//     console.log(string[middle - 1] + string[middle]);
//   }
// }

// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"

// function negative(int) {
//   // return Math.abs(int) * -1;
//   return int >= 0 ? int * -1 : int;
// } 

// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0

// function sequence(int) {
//   let resultArr = [];
  
//   for (let index = 1; index <= int; index++) {
//     resultArr.push(index);
//   }
  
//   return resultArr;
// }

// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]

// function swapName(name) {
//   return name.split(' ').reverse().join(', ');
// }

// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// function sequence(count, int) {
//   let results = [];
  
//   for (let index = 1; index <= count; index++) {
//     results.push(int * index);
//   }
  
//   console.log(results);
// }

// sequence(5, 1);          // [1, 2, 3, 4, 5]
// sequence(4, -7);         // [-7, -14, -21, -28]
// sequence(3, 0);          // [0, 0, 0]
// sequence(0, 1000000);    // []

// function reverseSentence(string) {
//   return string.split(' ').reverse().join(' ');
// }


// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

function reverseWords(string) {
  let strArr = string.split(' ');
  
  strArr = strArr.map((word) => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  });
  
  console.log(strArr.join(' '));
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"