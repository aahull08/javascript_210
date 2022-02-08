// function average(array) {
//   return sum(array) / array.length;
// }

// function sum(array) {
//   let total = 0;
//   for (let index = 0; index < array.length; index++) {
//     total += array[index];
//   }
//   return total;
// }

// let temperatures = [36.4, 36.6, 38.4, 39.2, 34.2];

// console.log(average(temperatures));

// let name = 'Julian';       // `name` is in global scope

// function greet() {         // `greet` is also in global scope
//   let counter = 0;         // `counter` is in function scope
//   while (counter < 3) {
//     let myName = name;     // `myName` is in block scope
//     console.log(myName);
//     counter += 1;
//   }

//   // console.log(myName); // would raise an error (myName not in scope)
//   console.log(counter);   // => 3
// }

// greet();   

// const hello = function () {   // We can also use let instead of const
//   return 'hello';
// };

// console.log(typeof hello);    // function
// console.log(hello());         // hello

// var bar = 42;
// console.log(global.bar);
// bar += 1;
// console.log(global.bar);

// var hello;

// console.log(hello());    // raises "TypeError: hello is not a function"

// hello = function () {
//   return 'hello world';
// };

var foo = 'hello';
              // logs undefined


function bar() {
  console.log(foo);
}

bar();