// let brendanEichQuote = () => console.log("Always bet on JavaScript.");



// console.log(brendanEichQuote());
// // logs:
// // Always bet on JavaScript.

// function cite(author, quote) {
//   console.log(author + ' said: ' + quote);
// }


// cite('Brendan Eich', 'Always bet on JavaScript.');
// // logs:
// // Brendan Eich said: "Always bet on JavaScript."

// let squaredNumber = (int) => int * int;

// console.log(squaredNumber(3)); // 9

// function multiplesOfThree() {
//   let divisor = 1;

//   for (let dividend = 3; dividend <= 30; dividend += 3) {
//     console.log(dividend + ' / ' + divisor + ' = 3');
//     divisor += 1;
//   }
// }

// console.log(multiplesOfThree());

// function compareByLength(str1, str2) {
//   if (str1.length === str2.length) {
//     return 0;
//   } else {
//     return str1.length > str2.length ? 1 : -1;
//   }
// }

// console.log(compareByLength('patience', 'perseverance')); // -1
// console.log(compareByLength('strength', 'dignity'));      //  1
// console.log(compareByLength('humor', 'grace'));           //  0

// let str = 'Captain Ruby';

// console.log(str.replace('Ruby', 'Javascript'));

// let greet = (language, region) => {
//   switch (language.toLowerCase()) {
//     case 'en':
//       if (region.toLowerCase() === 'us'){
//         return 'Hi';
//       } else if (region.toLowerCase() === 'gb') {
//         return 'Hello';
//       } else {
//         return 'Howdy';
//       }
//     case 'fr':
//       console.log("Salut");
//       break;
//     case 'pt':
//       console.log("Ola");
//       break;
//     case 'de':
//       console.log("Hallo");
//       break;
//     case 'sv':
//       console.log("Hej");
//       break;
//     case 'af':
//       console.log("Haai");
//       break;
//     default:
//       console.log('IDK');
//   }
// };

// // greet('en'); // 'Hi!'
// // greet('fr'); // 'Salut!'
// // greet('pt'); // 'Olá!'
// // greet('de'); // 'Hallo!'
// // greet('sv'); // 'Hej!'
// // greet('af'); // 'Haai!'
// // greet('b');

// function extractLanguage(code) {
//   return code.substring(0, 2);
// }
// // extractLanguage('en_US.UTF-8');  // 'en'
// // extractLanguage('en_GB.UTF-8');  // 'en'
// // extractLanguage('ko_KR.UTF-16'); // 'ko'

// function extractRegion(code) {
//   return code.split("_")[1].split('.')[0];
// }

// // extractRegion('en_US.UTF-8');  // 'US'
// // extractRegion('en_GB.UTF-8');  // 'GB'
// // extractRegion('ko_KR.UTF-16'); // 'KR'

// function localGreet(code){
//   let region = extractRegion(code);
//   let language = extractLanguage(code);
//   console.log(greet(language, region));
// }

// localGreet('en_US.UTF-8'); // 'Hey!'
// localGreet('en_GB.UTF-8'); // 'Hello!'
// localGreet('en_AU.UTF-8'); // 'Howdy!'

// console.log(greeting);

// var greeting = 'Hello world!';

// console.log(greeting);

// let greeting = 'Hello world!';

// if (true) {
//   let myValue = 20;
// }

// console.log(myValue);
// function myFunction() {
//   let a = 1;

//   if (true) {
//     console.log(a);
//   }
// }

// myFunction();

// function myFunction() {
//   let a = 1;

//   if (true) {
//     console.log(a);
//     let a = 2;
//     console.log(a);
//   }
// }

// myFunction();

// let a = 5;
// let b = false;

// if (a > 4) {
//   let b = true;
// }

// console.log(b);

// var a = 1;

// function myFunction() {
//   console.log(a);
//   var a = 12;
// }

// myFunction(a);

// const a = {
//   firstName: 'John',
//   lastName: 'Doe'
// };

// function myFunction() {
//   a.firstName = 'Jane';
// }

// myFunction();

// console.log(a);

// let str = 'confetti floating everywhere';

// console.log(str.toUpperCase());

// function repeat(count, str) {
//   let newstr = '';
//   while (count > 0) {
//     newstr += str;
//     count -= 1;
//   }
  
//   console.log(newstr)
// }

// repeat(3, 'ha'); // 'hahaha'

// let str = "A pirate I was meant to be!\n" +
//           "Trim the sails and roam the sea!" 

// console.log(str);

// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

// console.log(byteSequence.includes('x'));
// console.log(/5/.test(byteSequence));

// function isBlank(str) {
//   console.log(str.trim().length === 0);
// }

// isBlank('mars'); // false
// isBlank('  ');   // false
// isBlank('');     // true

// let str = 'launch school tech & talk';

// str = str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");

// console.log(str);

// function first(array) {
//   return array.shift();
// }

// function last(array) {
//   return array[array.length - 1]
// }

// console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
// console.log(first([])); // 'Earth'
// console.log(last(['Earth', 'Moon', 'Mars'])); // 'Mars'

// function change(array) {
//   array.shift();
//   array.push('geothermal');
// }

// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
// change(energy);
// console.log(energy);

// let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// console.log(alphabet.split(""));

// let scores = [96, 47, 113, 89, 100, 102];

// console.log(scores.filter(num => num >= 100).length);

// let vocabulary = [
//   ['happy', 'cheerful', 'merry', 'glad'],
//   ['tired', 'sleepy', 'fatigued', 'drained'],
//   ['excited', 'eager', 'enthused', 'animated']
// ];

// vocabulary.forEach( array => {
//   array.forEach( emotion => {
//     console.log(emotion);
//   });
// })

// let array1 = [2, 6, 4];
// let array2 = [2, 6, 4];

// console.log(array1 === array2);
// console.log(array1 == array2);

// function filter(input) {
//   console.log(Array.isArray(input));
// }

// filter([]);
// filter(' dfh')
// function contains(destination, array) {
//   console.log(array.indexOf(destination) !== -1)
// }
// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
//   'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
//   'Marrakesh', 'New York City'];
  
// contains('Barcelona', destinations); // true
// contains('Nashville', destinations); // false

// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// console.log(passcode.join("-"));

// let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// while (groceryList.length > 0) {
//   console.log(groceryList[0]);
//   groceryList.shift();
// }

// // logs:
// // paprika
// // tofu
// // garlic
// // quinoa
// // carrots
// // broccoli
// // hummus

// console.log(groceryList); // []

// function greeting() {
//   return 'Good morning';
// }

// function recipient() {
//   return 'Launch School';
// }

// function greet() {
//   console.log(greeting() + ', ' + recipient() + '!');
// }

// greet();                                // logs: Hello, world!
// greet();                   // logs: Salutations, world!
// greet(); // logs: Good morning, Launch School!

// function calculateBMI(heightInCm, weightInKilograms) {
//   let heightInMeters = heightInCm / 100;
  
//   let bmi = weightInKilograms / heightInMeters**2;
//   return bmi.toFixed(2);
// }

// console.log(calculateBMI(180, 80)); // "24.69"

// function catAge(humanAge){
//   let age = 0;
  
//   for (let i = 1; i <= humanAge; i++) {
//     if (i === 1) {
//       age += 15;
//     } else if (i === 2) {
//       age += 9;
//     } else {
//       age += 4;
//     }
//   }
//   console.log(age);
// }

// catAge(0); // 0
// catAge(1); // 15
// catAge(2); // 24
// catAge(3); // 28
// catAge(4); // 32

// function removeLastChar(str) {
//   console.log(str.slice(0, -1));
// }

// removeLastChar('ciao!'); // 'ciao'
// removeLastChar('hello'); // 'hell'

// const template = 'I VERB NOUN.';

// let sentence = (verb, noun) =>  template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);

// console.log(sentence('like', 'birds'));
// // logs: I like birds.

// let initGame = () => ({
//     level: 1,
//     score: 0
//   });

// let game = initGame();

// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);

// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };

// console.log(student.locker);

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
// };

// console.log(jane.location.country);

// let fido = {
//   name: 'Fido',
//   species: 'Labrador Retriever',
//   color: 'brown',
//   weight: 16,
// };

// fido.age = 16;
// fido['Favorite Food'] = "Pork";
// console.log(fido);
// // Add property 'age'.
// // Add property 'favorite food'.

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   greet(name) {
//     console.log("Hej, Bobby!");
//   }
// };

// jane.greet('Bobby'); // Hej, Bobby!
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

// let keys = Object.keys(vehicle);
// console.log(keys);

// let keys = [];
// for (let property in vehicle) {
//   keys.push(property);
// }
// console.log(keys)

// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// let nestedPerson = [];

// for (let property in person) {
//   nestedPerson.push([property, person[property]]);
// }

// console.log(nestedPerson);

// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// person = {};

// nestedArray.forEach(subArr => {
//   person[subArr[0]] = subArr[1];
// });

// console.log(person);
// // Expected output:
// // { title: 'Duke', name: 'Nukem', age: 33 }
// // Expected output:
// // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

function clone(obj) {
  let cloneObj = {};
  for (let property in obj) {
    cloneObj[property] = obj[property];
  }
  
  return cloneObj;
  
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false