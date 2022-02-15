// function lastInArray(array) {
//   return array[array.length - 1];
// }

// let lastInArray = arr => arr[arr.length - 1];

// console.log(lastInArray([1, 2, 3, 4]));

// let roleCall = function(array) {
//   for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
//   }
// }

// roleCall(['Brian', 'Tom', 'Rob', 'Frank']);

// function reverseArray(array) {
//   let newArray = [];
//   for (let index = 1; index < array.length; index++) {
//     newArray.push(array[array.length - index]);
//   }
//   return newArray;
// }

// console.log(reverseArray([1, 2, 3, 4, 5, 6]));

// let smash = function(array) {
//   let smashedString = '';
//   for (let index = 0; index < array.length; index++) {
//     smashedString +=  String(array[index]);
//   }
//   return smashedString;
// }

// console.log(smash([1, 'a', 4]))

// function push(array, newEle) {
//   array[array.length] = newEle;
//   return array.length;
// }
// let count = [0, 1, 2];
// console.log(push(count, 3));         // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// function pop(array) {
//   if (array.length === 0) {
//     return undefined;
//   }
  
//   let deletedEle = array[array.length - 1];
//   array.length = array.length - 1;
//   return deletedEle;
// }


// let count = [1, 2, 3];
// console.log(pop(count));             // 3
// console.log(count);                  // [ 1, 2 ]

// let unshift = (array, newEle) => {
//   for (let index = array.length; index > 0; index -= 1){
//     array[index] = array[index - 1];
//   }
  
//   array[0] = newEle;
//   return array.length;
// };



// let count = [1, 2, 3];
// console.log(unshift(count, 0));      // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// let shift = (array) => {
//   let removedEle = array[0];
//   for (let index  = 1; index < array.length; index++) {
//     array[index - 1] = array[index];
//   }
//   array.length = array.length - 1;
//   return removedEle;
// };

// let count = [1, 2, 3];
// console.log(shift(count));           // 1
// console.log(count);                  // [ 2, 3 ]

// function indexOf(array, value) {
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] === value) {
//       return index;
//     }
//   }
  
//   return -1;
// }


// console.log(indexOf([1, 2, 3, 3], 3));         // 2
// console.log(indexOf([1, 2, 3], 4));            // -1

// function lastIndexOf(array, value) {
//   for (let index = array.length - 1; index >= 0; index--) {
//     if (array[index] === value) {
//       return index;
//     }
//   }
  
//   return -1;
// }


// console.log(lastIndexOf([1, 2, 3, 3], 3) === 3);
// console.log(lastIndexOf([1, 2, 3], 4) === -1);        // -1

// function slice(array, startIdx, endIdx) {
//   let newArray = [];
  
//   for (let index = startIdx; index < endIdx; index++) {
//     newArray.push(array[index]);
//   }
  
//   return newArray;
// }


// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// function splice(array, startIdx, numValues) {
//   let endIdx = startIdx + numValues;
//   let newArray = slice(array, startIdx, endIdx);
//   for (let index = 0; index < newArray.length; index++) {
//     array[startIdx + index] = array[endIdx + index];
//   }
//   array.length = array.length - numValues;
//   return newArray;
// }


// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]

// function concat(arr1, arr2) {
//   let newArr = [];
  
//   for (let index = 0; index < arr1.length; index++) {
//     newArr[index] = arr1[index];
//   }
  
//   for (let index = 0; index < arr2.length; index++) {
//     newArr[newArr.length] = arr2[index];
//   }
  
//   return newArr;
// }

// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]


// function join(array, seperator) {
//   let newString = '';
  
//   for (let index = 0; index < array.length; index++) {
//     newString += String(array[index]);
    
//     if (index < array.length - 1) {
//       newString += String(seperator);
//     }
//   }
  
//   return newString;
// }

// console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
// console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'

// function arraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
  
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
  
//   return true;
// }

// console.log(arraysEqual([1], [1]));                               // true
// console.log(arraysEqual([1], [2]));                               // false
// console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
// console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false



// function firstElementOf(arr) {
//   return arr[0];
// }

// console.log(firstElementOf(['U', 'S', 'A']));  // returns "U"

// function lastElementOf(arr) {
//   return arr[arr.length - 1];
// }

// console.log(lastElementOf(['U', 'S', 'A']));  // returns "A"

// function nthElementOf(arr, index) {
//   return arr[index];
// }

// let digits = [4, 8, 15, 16, 23, 42];

// console.log(nthElementOf(digits, 3));   // returns 16
// console.log(nthElementOf(digits, 8));   // what does this return?
// console.log(nthElementOf(digits, -1));  // what does this return?

// digits[-1] = -42;
// console.log(nthElementOf(digits, -1));
// console.log(digits[-1]);
// console.log(digits['-1']);  

// function firstNOf(arr, count) {
//   // let newArray = [];
//   // for (let index = 0; index < count; index++) {
//   //   newArray.push(arr[index]);
//   // }
  
//   // return newArray;
  
//   return arr.slice(0, count);
// }

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

// function lastNOf(arr, count) {
//   if (count > arr.length) {
//     count = arr.length;
//   }
//   return arr.slice(arr.length - count);
// }

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 6));    // returns [16, 23, 42]

// function endsOf(beginningArr, endingArr) {
//   return [beginningArr[0], endingArr[endingArr.length - 1]];
// }

// console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]

// function oddElementsOf(arr) {
//   let newArr = [];
  
//   for (let index = 1; index < arr.length; index += 2) {
//     newArr.push(arr[index]);
//   }
  
//   return newArr;
// }

// let digits = [4, 8, 15, 16, 23, 42];

// console.log(oddElementsOf(digits));    // returns [8, 16, 42]

// function forwardReverse(arr) {
//   // let newArr = arr.slice(0);
  
//   // for (let index = arr.length - 1; index >= 0; index--) {
//   //   newArr.push(arr[index]);
//   // }
  
//   // console.log(newArr);
  
//   return arr.concat(arr.slice().reverse());
// }

// console.log(forwardReverse([1, 2, 3, 4]))

// function sortDescending(arr) {
//   // …
// }

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// function sortDescending(arr) {
//   let newArr = arr.slice();

//   for (let index = 0; index < arr.length - 1; index++) {
//     if (newArr[index] < newArr[index + 1]) {
//       let temp = newArr[index];
//       newArr[index] = newArr[index + 1];
//       newArr[index + 1] = temp;
//       index = -1;
//     }
//   }
  
//   return newArr;
// }

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]


// function matrixSums(arr) {
//   let newArr = [];
  
//   for (let index = 0; index < arr.length; index++) {
//     let total = arr[index].reduce(
//       ( previousValue, currentValue ) => previousValue + currentValue, 0);
//     newArr.push(total);
//   }
  
//   return newArr;
// }

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

// function uniqueElements(arr) {
//   let newArr = [];
  
//   for (let index = 0; index < arr.length; index++) {
    
//     if (newArr.includes(arr[index])) {
//       continue;
//     }
    
//     newArr.push(arr[index]);
//   }
  
//   return newArr;
// }

// console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]

// function missing(arr) {
//   let missingArr = [];
  
//   for (let index = arr[0] + 1; index <= arr[arr.length - 1]; index ++) {
//     if (!arr.includes(index)) {
//       missingArr.push(index);
//     }
//   }
  
//   return missingArr;
// }

// console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
// console.log(missing([1, 2, 3, 4]));                    // []
// console.log(missing([1, 5]));                          // [2, 3, 4]
// console.log(missing([6]));                             // []

// let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray.slice();

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);

// let copy = function(array) {
//   let newArr = [];
  
//   for (let i = 0; i < array.length; i++) {
//     newArr.push(array[i]);
//   }
  
//   return newArr;
// };

// let myArray = [1, 2, 3, 4];
// const myOtherArray = copy(myArray);

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);

// function concat(array1, ...args) {
//   let newArr = array1.slice();
  
//   for (let i = 0; i < args.length; i++) {
//     let sub = args[i];
//     if (Array.isArray(sub)) {
//       for (let i = 0; i < sub.length; i++) {
//         newArr.push(sub[i]);
//       }
//     } else {
//       newArr.push(sub);
//     }
//   }
  

  
//   return newArr;
// }

// // console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
// // console.log(concat([1, 2], 3));                     // [1, 2, 3]
// // console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
// // console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


// // const obj = { a: 2, b: 3 };
// // const newArray = concat([2, 3], obj);
// // console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
// // obj.a = 'two';
// // console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

// // const arr1 = [1, 2, 3];
// // const arr2 = [4, 5, obj];
// // const arr3 = concat(arr1, arr2);
// // console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
// // obj.b = 'three';
// // console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

// // arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
// // console.log(obj);                                   // { a: "two", b: 3 }

// console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
// console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]

// pop

// function pop(array) {
//   let element = array[array.length - 1];
//   if (array.length === 0) {
//     return undefined;
//   }
//   array.length = array.length - 1;
//   return element;
// }

// const array1 = [1, 2, 3];
// console.log(pop(array1));                        // 3
// console.log(array1);                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]


// function push(array, ...elements) {
//   let elelen = elements.length;
//   let arrlen = array.length;
  
//   for (let i = 0; i < elelen; i++) {
//     array[arrlen + i] = elements[i];
//   }
  
//   return array.length;
// }

// // push
// const array2 = [1, 2, 3];
// console.log(push(array2, 4, 5, 6));              // 6
// console.log(array2);                // [1, 2, 3, 4, 5, 6]
// console.log(push([1, 2], ['a', 'b']));          // 3
// console.log(push([], 1));                       // 1
// console.log(push([]));                          // 0

// function reverse(inputForReversal) {
//   let newEle;
  
//   if (Array.isArray(inputForReversal)) {
//     newEle = inputForReversal.reverse();
//   } else {
//     newEle = inputForReversal.split('').reverse().join('');
//   }
  
//   console.log(newEle);
// }

// reverse('Hello');           // "olleH"
// reverse('a');               // "a"
// reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
// reverse([]);                // []

// const array = [1, 2, 3];
// reverse(array);             // [3, 2, 1]
// console.log(array);                      // [1, 2, 3]

// function shift(array) {
//   let newEle = array[0];
  
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i + 1];
//   }

//   array.pop();
//   return newEle;
// }

// function shiftRight(array) {
//   let arrLen = array.length;
//   for (let i = 0; i < arrLen; i++) {
//     array[arrLen - i] = array[arrLen - 1 - i];
//   }

//   return array;
// }

// function unshift(array, ...newEles) {
//   let arrlen = array.length;
//   newEles.reverse();
  
//   for (let idx = 0; idx < newEles.length; idx++) {
//     shiftRight(array)

//     array[0] = newEles[idx];
//   }
  
//   console.log(array);
//   return array.length;
// }

// function shift(array) {
//   let result;

//   if (array.length !== 0) {
//     result = array.splice(0, 1).pop();
//   }

//   return result;
// }

// function unshift(array, ...args) {
//   for (let i = 0; i < args.length; i += 1) {
//     array.splice(i , 0, args[i]);
//   }
//   console.log(array);
//   return array.length;
// }

// // console.log(shift([1, 2, 3]));                // 1
// // console.log(shift([]));                       // undefined
// // console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

// console.log(unshift([1, 2, 3], 5, 6));        // 5
// console.log(unshift([1, 2, 3]));              // 3
// console.log(unshift([4, 5], [1, 2, 3]));      // 3

// const testArray = [1, 2, 3];
// shift(testArray);                // 1
// // console.log(testArray);                       // [2, 3]
// console.log(unshift(testArray, 5));           // 3
// console.log(testArray);                       // [5, 2, 3]

// function slice(array, begin, end) {
  
//   if (end >= array.length) {
//     end = array.length;
//   }
  
//   let newArr = [];
//   for (let i = begin; i < end; i++) {
//     newArr.push(array[i]);
//   }
  
//   console.log(newArr);
  
// }

// // slice([1, 2, 3], 1, 2);               // [2]
// // slice([1, 2, 3], 2, 0);               // []
// // slice([1, 2, 3], 5, 1);               // []
// // slice([1, 2, 3], 0, 5);               // [1, 2, 3]

// // const arr1 = [1, 2, 3];
// // slice(arr1, 1, 3);                     // [2, 3]
// // console.log(arr1);                                  // [1, 2, 3]

// function splice(array, start, deleteCount, element1, elementN) {
//   let returnArray = array.slice(start, start + deleteCount);
  

  
  
//   return returnArray;
// }

// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

// // const arr2 = [1, 2, 3];
// // splice(arr2, 1, 1, 'two');             // [2]
// // arr2;                                  // [1, "two", 3]

// // const arr3 = [1, 2, 3];
// // splice(arr3, 1, 2, 'two', 'three');    // [2, 3]
// // arr3;                                  // [1, "two", "three"]

// // const arr4 = [1, 2, 3];
// // splice(arr4, 1, 0);                    // []
// // splice(arr4, 1, 0, 'a');               // []
// // arr4;                                  // [1, "a", 2, 3]

// // const arr5 = [1, 2, 3];
// // splice(arr5, 0, 0, 'a');               // []
// // arr5;                                  // ["a", 1, 2, 3]

function areArraysEqual(array1, array2) {
  let arr1 = array1.sort();
  let arr2 = array2.sort();
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  
  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true