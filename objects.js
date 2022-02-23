// const myObject = {
//   'a': 'name',
//   'b': 'test',
//   123: 'c',
//   1: 'd',
// };

// console.log(myObject[1]);
// console.log(myObject['a']);
// console.log(myObject.a);

// const person = {
//   firstName() {
//     return 'Victor';
//   },
//   lastName() {
//     return 'Reyes';
//   },
// };

// console.log(`${person.firstName()} ${person.lastName()}`);

// const myObject = {
//   prop1: '123',
//   prop2: '234',
//   'prop 3': '345',
// };

// const prop2 = '456';
// myObject['prop2'] = '456';
// myObject[prop2] = '678';

// console.log(myObject[prop2]);
// console.log(myObject.prop2);
// console.log(myObject);

// const myObj = {};
// myObj[myFunc()] = 'hello, ';

// function myFunc() {
//   return 'funcProp';
// }

// console.log(myObj);
// myObj[myFunc()] = 'world!';
// console.log(myObj);

// const myArray = ['a', 'b', 'c'];

// console.log(myArray[0]);
// console.log(myArray[-1]);

// myArray[-1] = 'd';
// myArray['e'] = 5;
// myArray[3] = 'f';

// console.log(myArray[-1]);
// console.log(myArray['e']);
// console.log(myArray);

// const myArray = [5, 5];
// myArray[-1] = 5;
// myArray[-2] = 5;

// function average(array) {
//   let sum = 0;

//   for (let i = -2; i < array.length; i += 1) {
//     sum += array[i];
//   }

//   return sum / array.length;
// }

// console.log(average(myArray));

// function penultimate(string) {
//   string = string.split(' ');
//   return string[string.length - 2];
// }

// console.log(penultimate('last word'));                    // expected: "last"
// console.log(penultimate('Launch School is great!'));      // expected: "is"


// function timeOfDay(deltaMinutes) {
//   const midnight = new Date('1/1/2022 00:00');
//   const aftermidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
//   const hours = padWithZeros(aftermidnight.getHours(), 2);
//   const mins = padWithZeros(aftermidnight.getMinutes(), 2);
  
//   console.log(`${hours}:${mins}`);
// }

// const MILLISECONDS_PER_MINUTE = 60000;

// function timeOfDay(deltaMinutes) {
//   const midnight = new Date('1/1/2000 00:00');
//   const afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
//   const hours = padWithZeroes(afterMidnight.getHours(), 2);
//   const minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

//   return `${hours}:${minutes}`;
// }

// function padWithZeroes(number, length) {
//   let numberString = String(number);

//   while (numberString.length < length) {
//     numberString = `0${numberString}`;
//   }

//   return numberString;
// }
// console.log(timeOfDay(0));          // "00:00"
// console.log(timeOfDay(-3));         // "23:57"
// timeOfDay(35);         // "00:35"
// timeOfDay(-1437);      // "00:03"
// timeOfDay(3000);       // "02:00"
// timeOfDay(800);        // "13:20"
// timeOfDay(-4231);      // "01:29"

// function randomGreeting() {
//   const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
//               'Greetings', 'Salutations', 'Good to see you'];

//   const idx = Math.floor(Math.random() * words.length);

//   return words[idx];
// }

// function greet(...args) {
//   const names = args;

//   for (let i = 0; i < names.length; i++) {
//     const name = names[i];
//     const greeting = randomGreeting();

//     console.log(`${greeting}, ${name}!`);
//   }
// }

// greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

// function includesFalse(list) {
//   for (let i = 0; i < list.length; i++) {
//     let element = list[i];

//     if (element === false) {
//       return true;
//     }
//   }

//   return false;
// }
//                                                                   // returns:
// console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]));       // true
// console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
// console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));             // true

// let rlSync = require('readline-sync');
// function placeABet(guess) {
//   let generateRandomInt = function () {
//     return Math.floor(Math.random() * 25) + 1;
//   };

//   const winningNumber = generateRandomInt();

//   if (guess < 1 || guess > 25) {
//     return 'Invalid guess. Valid guesses are between 1 and 25.';
//   }

//   if (guess === winningNumber) {
//     return "Congratulations, you win!";
//   } else {
//     return "Wrong-o! You lose.";
//   }
// }

// const userGuess = parseInt(rlSync.question('Input a guess between 1-25'), 10);
// console.log(placeABet(userGuess));

// function wantToVisit(museum, city) {
//   return museum.includes('Computer')
//       || museum.includes('Science')
//       || (
//         museum.includes('Modern')
//         && museum.includes('Art')
//         && (museum.includes('Andy Warhol')
//         || city === 'Amsterdam')
//       );
// }

// // Tests (should all print 'true')

// console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
// console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
// console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
// console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
// console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
// console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
// console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
// console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
// console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);
// console.log(wantToVisit('Andy Warhol Museum', 'Melbourne') === false);

// let rlSync = require('readline-sync');
// const transactionLog = [];

// function processInput(input) {
//   const numericalData = parseFloat(input);

//   if (Number.isNaN(numericalData)) {
//     throw (new Error('Data could not be converted to numerical amount.'));
//   }

//   return numericalData;
// }

// function logTransaction() {
//   let data = rlSync.question('Please enter the transaction amount: ');

//   try {
//     data = processInput(data);
//     transactionLog.push(data);

//     console.log('Thank you. Data accepted.');
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// function transactionTotal() {
//   let total = 0;

//   for (let i = 0; i < transactionLog.length; i++) {
//     total += transactionLog[i];
//   }

//   return total;
// }

// logTransaction();
// logTransaction();
// logTransaction();

// console.log(transactionTotal());

// const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
// const isMidnight = true;
// const isFullmoon = true;

// function isTransformable(species) {
//   return species[0] === 'w';
// }

// function transform(species) {
//   return `were${species}`;
// }

// for (let index = 0; index < species.length; index++) {
//   const thisSpecies = species[index];
//   let newSpecies;

//   if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
//     newSpecies = transform(thisSpecies);
//   }

//   if (newSpecies) {
//     console.log(`Beware of the ${newSpecies}!`);
//   }
// }

// Roles (salary still to be determined)

// const ceo = {
//   tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
//   salary: 0,
// };

// const developer = {
//   tasks: ['turn product vision into code'],
//   salary: 0,
// };

// const scrumMaster = {
//   tasks: ['organize scrum process', 'manage scrum teams'],
//   salary: 0,
// };

// // Team -- we're hiring!

// const team = {};

// team.ceo = 'Kim';
// team.scrumMaster = 'Alice';
// team.developer = undefined;

// const company = {
//   name: 'Space Design',
//   team,
//   projectedRevenue: 500000,
// };

// console.log(`----{ ${company.name} }----`);
// console.log(`CEO: ${company.team.ceo}`);
// console.log(`Scrum master: ${company.team.scrumMaster}`);
// console.log(`Projected revenue: $${company.projectedRevenue}`);

// // ----{ Space Design }----
// // CEO: undefined
// // Scrum master: undefined
// // Projected revenue: $500000

// The shopping cart is a list of items, where each item
// is an object { name: <string>, amount: <number> }.
// let shoppingCart = [];

// // Currently available products with prices.
// const prices = {
//   'notebook': 9.99,
//   'pencil': 1.70,
//   'coffee': 3.00,
//   'smoothie': 2.10,
// };

// function price({name}) {
//   return prices[name];
// }

// // Adding an item to the shopping cart.
// // The amount is optional and defaults to 1.
// // If the item is already in the cart, its amount is updated.
// function updateCart(name, amount = 1) {

//   let alreadyInCart = false;

//   for (let i = 0; i < shoppingCart.length; i += 1) {
//     let item = shoppingCart[i];

//     if (item.name === name) {
//       item.amount = amount;
//       alreadyInCart = true;
//       break;
//     }
//   }

//   if (!alreadyInCart) {
//     shoppingCart.push({ name, amount });
//   }
// }

// // Calculating the price for the whole shopping cart.
// function total() {
//   let total = 0;

//   for (let i = 0; i < shoppingCart.length; i += 1) {
//     let item = shoppingCart[i];

//     total += (item.amount * price(item));
//   }

//   return total.toFixed(2);
// }

// function pay() {
//   // omitted

//   console.log(`You have been charged $${total()}.`);
// }

// function checkout() {
//   pay();
//   shoppingCart = [];
// }

// // Example purchase.

// updateCart('notebook');
// updateCart('pencil', 2);
// updateCart('coffee', 1);
// // "Oh, wait, I do have pencils..."
// updateCart('pencil', 0);

// checkout();
// // You have been charged $14.69.

const totalPages = 364;
let energy = 100;
let currentPage = 1;

function read() {
  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();