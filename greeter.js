let rlSync = require('readline-sync');

// let numerator = 10;
// const DENOMINATOR = 2;
// let answer = numerator / DENOMINATOR;
// console.log(answer);
// let incrementer = 1;
// let start = incrementer;
// let end;
// let difference;

// incrementer += 1;
// incrementer += 1;
// incrementer += 1;

// console.log(incrementer);

// incrementer++;
// incrementer++;

// console.log(incrementer);

// end = incrementer;

// difference = end - start;

// console.log(end);
// console.log(difference);

// answer = (11 + 31) * 3;

// console.log(answer);

// let x = '13';
// let y = 9;

// console.log(x * y);
// let npa = 212;
// let nxx = 555;
// let num = 1212;

// console.log(npa.toString() + nxx.toString() + String(num));

// let bool = true.toString();
// let arr = [1, 2, 3].toString();

// console.log(bool);
// console.log(arr);

// let apples = 3;
// let bananas = 1;
// let areEqual = apples === bananas;
// let eitherOr = apples || bananas;


// console.log(areEqual);
// console.log(eitherOr);

// eitherOr = bananas || apples;

// console.log(eitherOr);
// if (bananas === apples) {
//     console.log("It's strictly equal!");
// }  else {
//     if (bananas == apples) {
//         console.log("It's equal!");
//     }
//     else {
//         console.log("It's not equal!");
//     }
// }

// let lastName = 'Huldl';

// let familyMessage = lastName === 'Hull' ? "Your part of the family" : "You are not part of the family.";

// console.log(familyMessage);

// const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
// ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
// dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
// ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
// diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
// hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

// console.log(paragraph);

// const myBoolean = true;
// const myString = 'hello';
// const myArray = [];
// const myOtherString = '';

// if (myBoolean) {
//   console.log('Hello');
// }

// if (!myString) {
//   console.log('World');
// }

// if (!!myArray) {
//   console.log('World2');
// }

// if (myOtherString || myArray) {
//   console.log('!');
// }

// let num1 = Number(rlSync.question("Enter the first number: "));
// let num2 = Number(rlSync.question("Enter the second number: "));

// console.log(num1 + " + " + num2 + " = " + (num1 + num2));
// console.log(num1 + " - " + num2 + " = " + (num1 - num2));
// console.log(num1 + " * " + num2 + " = " + (num1 * num2));
// console.log(num1 + " / " + num2 + " = " + (Math.round(num1 / num2)));
// console.log(num1 + " % " + num2 + " = " + (num1 % num2));
// console.log(num1 + " ** " + num2 + " = " + (num1 ** num2));

let phrase = rlSync.question("Please enter a phrase: ");

let noSpacePhrase = phrase.replace(/[^A-Za-z]/g, '');
let count = noSpacePhrase.length;
console.log(noSpacePhrase);
console.log(`There are ${count} characters in "${phrase}".`);