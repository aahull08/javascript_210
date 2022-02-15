// function objectHasProperty(object, string) {
//   // return Object.keys(object).includes(string);
//   // console.log(Object.keys(object).indexOf(string) !== -1)
// }

// let pets = {
//   cat: 'Simon',
//   dog: 'Dwarf',
//   mice: null,
// };

// objectHasProperty(pets, 'dog');       // true
// objectHasProperty(pets, 'lizard');    // false
// objectHasProperty(pets, 'mice');      // true

// function incrementProperty(object, string) {
//   if (Object.keys(object).includes(string)) {
//     object[string] += 1;
//   } else {
//     object[string] = 1;
//   }
// }

// let wins = {
//   steve: 3,
//   susie: 4,
// };

// incrementProperty(wins, 'susie');   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// incrementProperty(wins, 'lucy');    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// function copyProperties(obj1, obj2) {
//   // let keys = Object.keys(obj1);
  
//   // keys.forEach(key => obj2[key] = obj1[key]);
  
//   // return keys.length;
//   let count = 0;
  
//   for (let property in obj1) {
//     obj2[property] = obj1[property];
//     count += 1;
//   }
  
//   return count;
// }


// let hal = {
//   model: 9000,
//   enabled: true,
// };

// let sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }

// function wordCount(string) {
//   let newObj = {};
//   let keys = string.split(' ');
//   keys.forEach((key) => {
//     if (newObj[key]) {
//       newObj[key] += 1;
//     } else {
//       newObj[key] = 1;
//     }
//   });
  
//   return newObj;
// }

// console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }

// function radionsToDegrees(radions) {
//   return radions * 180 / Math.PI;
// }

// console.log(radionsToDegrees(1));
// let x = -180;
// console.log(Math.abs(x));
// console.log(Math.sqrt(16777216));
// console.log(Math.pow(16, 6));
// let a = 50.72;
// let b = 49.2;
// let c = 49.86;

// console.log(Math.floor(a));
// console.log(Math.ceil(b));
// console.log(Math.round(c));

// function random(min, max) {
//   if (max < min) {
//     let temp = max;
//     max = min;
//     min = temp;
//   } else if (min === max) {
//     return min;
//   }
  
//   return Math.floor(Math.random() * (max - min + 1) + 1);
// }

// console.log(random(0, 10));
// console.log(random(57, 99));
// console.log(random(55, 55));
// console.log(random(55, 22));

// function formattedMonth(today) {
//   let month = today.getMonth();
//   let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   return months[month];
// }

// function formattedDay(today) {
//   let day = today.getDay();
//   let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   return daysOfWeek[day];
// }
// function dateSuffix(date) {
//   let suffix = 'th';
//   let lastDigit = date % 10;
//   let lastTwoDigits = date % 100;
  
//   if (lastDigit === 1) {
//     if (lastTwoDigits !== 11) {
//       suffix = 'st';
//     }
//   } else if (lastDigit === 2) {
//     if (lastTwoDigits !== 12) {
//       suffix = 'nd';
//     }
//   } else if (lastDigit === 3) {
//     if (lastTwoDigits !== 13) {
//       suffix = 'rd';
//     }
//   }
  
//   return suffix;
// }

// function formattedDate(today) {
//   let month = formattedMonth(today);
//   let day = formattedDay(today);
//   let date = today.getDate();
//   let suffix = dateSuffix(date);

  
//   console.log(`Today's date is ${day}, ${month} ${date + suffix}`)
// }

// // let today = new Date();
// // formattedDate(today);

// let today = new Date();
// let tomorrow = new Date(today.getTime());
// tomorrow.setDate(today.getDate() + 1);
// // console.log(today.getFullYear());
// // console.log(today.getYear());

// formattedDate(today);
// formattedDate(tomorrow);

// let nextWeek = new Date(today.getTime());

// console.log(nextWeek.toDateString() === today.toDateString());
// nextWeek.setDate(nextWeek.getDate() + 1);

// console.log(nextWeek.toDateString() === today.toDateString());

// function formatTime(date) {
//   let hour = date.getHours();
//   let min = date.getMinutes();
  
//   if (hour < 10) {
//     hour = `0${hour}`;
//   }
//   if (min < 10) {
//     min = `0${min}`;
//   }
  
//   console.log(`${hour}:${min}`);
// }

// formatTime(today);
// console.log(formatTime(new Date(2013, 2, 1, 1, 10)));
// function greetings(nameArr, jobObj) {
//   console.log(`Hello, ${nameArr.join(' ')}! Nice to have a ${jobObj.title} ${jobObj.occupation} around.`);
// }

// greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.

function repeatedCharacters(string) {
  let newObj = {};
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (newObj[string[i]]) {
      newObj[string[i]] += 1;
    } else {
      newObj[string[i]] = 1;
    }
  }

  let keys = Object.keys(newObj);
  keys.forEach( key => {
    if (newObj[key] < 2) {
      delete newObj[key];
    }
  });
  
  console.log(newObj);
}


repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }