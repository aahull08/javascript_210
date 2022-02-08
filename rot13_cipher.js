function rot13(message) {
  let codedMessage = '';
  const CYPHER_OFFSET = 13;
  
  for (let index = 0; index < message.length; index++) {
    let char = message[index];
    let ascii = char.charCodeAt(0);
    
    if ((char >= 'a' && char <= 'm') || (char >= 'A' && char <= 'M')) {
      ascii += CYPHER_OFFSET;
    } else if ((char >= 'n' && char <= 'z') || (char >= 'N' && char <= 'Z')) {
      ascii -= CYPHER_OFFSET;
    }
    
    codedMessage += String.fromCharCode(ascii);
  }
  
  return codedMessage;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(''));
console.log(rot13('788'));
console.log(rot13('   '));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// First attempt
// function changeLetter(ascii) {
//   if (ascii <= 77 || (ascii >= 97 && ascii <= 109)) {
//     ascii += 13;
//   } else {
//     ascii -= 13;
//   }
//   return String.fromCharCode(ascii);
// }

// function rot13(message) {
//   let codedMessage = '';
//   for (let index = 0; index < message.length; index++) {
//     let asciiNum = message[index].charCodeAt(0);
//     if ((asciiNum >= 65 && asciiNum <= 90) || (asciiNum >= 97 && asciiNum <= 122)) {
//       codedMessage += changeLetter(asciiNum);
//     } else {
//       codedMessage += message[index];
//     }
//   }
  
//   return codedMessage;
// }