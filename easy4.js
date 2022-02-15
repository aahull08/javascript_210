// function finalize(num) {
//   if (String(num).length === 2) {
//     return num;
//   } else {
//     return `0${num}`;
//   }
// }

// function dms(angle) {
//   let degree = Math.floor(angle);
//   let min = (angle - degree) * 60;
//   let sec = (min - Math.floor(min)) * 60;
  
//   min = finalize(Math.floor(min));
//   sec = finalize(Math.floor(sec));
  
//   console.log(`${degree}\xB0${min}'${sec}"`)
// }




// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"

// function union(arr1, arr2) {
//   let returnArray = [];
  
//   arr1.forEach((num) => {
//     if (!returnArray.includes(num)) {
//       returnArray.push(num);
//     }
//   });
  
//   arr2.forEach((num) => {
//     if (!returnArray.includes(num)) {
//       returnArray.push(num);
//     }
//   });
  
//   console.log(returnArray);
  
// }

// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

// function halvsies(array) {
//   let half = Math.ceil(array.length / 2);
//   let arr1 = array.slice(0, half);
//   let arr2 = array.slice(half);
//   console.log([arr1, arr2]);
// }

// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]

// function findDup(array) {
//   let storage = {};
//   array.forEach((num) => {
//     if (storage[num]) {
//       console.log(num);
//     } else {
//       storage[num] = true;
//     }
//   });

// }
// findDup([1, 5, 3, 1]);                                // 1
// findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73

// function interleave(arr1, arr2) {
//   let returnArray = [];
  
//   for (let index = 0; index < arr1.length; index++) {
//     returnArray.push(arr1[index], arr2[index]);
//   }
  
//   console.log(returnArray);
// }


// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// function showMultiplicativeAverage(array) {
//   let product = 1;
//   array.forEach((num) => {
//     product *= num;
//   });
//   let average = product / array.length;
//   console.log(average.toFixed(3));
// }

// showMultiplicativeAverage([3, 5]);                   // "7.500"
// showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

// function multiplyList(arr1, arr2) {
//   let retArr = [];
  
//   for (let index = 0; index < arr1.length; index++) {
//     retArr.push(arr1[index] * arr2[index]);
//   }
  
//   console.log(retArr);
// }

// multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

// function digitList(int) {
//   let results = [];
//   let strInt = String(int);
  
//   for (let index = 0; index < strInt.length; index++) {
//     results.push(Number(strInt[index]));
//   }
  
//   console.log(results);
// }
// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]

// function countOccurrences(array) {
//   let storage = {};
  
//   array.forEach((word => {
//     if (storage[word]) {
//       storage[word] += 1;
//     } else {
//       storage[word] = 1;
//     }
//   }));
  
//   logOccurrence(storage);
// }

// function logOccurrence(hash) {
//   for (let item in hash) {
//     console.log(`${item} => ${hash[item]}`)
//   }
// }

// const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// // console output
// // car => 4
// // truck => 3
// // SUV => 1
// // motorcycle => 2

// function average(array) {
//   let sum = 0;
  
//   array.forEach((num) => {
//     sum += num;
//   });
  
//   let average = sum / array.length;
//   console.log(Math.floor(average));
// }
// average([1, 5, 87, 45, 8, 8]);       // 25
// average([9, 47, 23, 95, 16, 52]);    // 40