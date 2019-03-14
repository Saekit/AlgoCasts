// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Math.sign(500) --> 1, Math.sign(-300) --> -1

function reverseInt(n) {
  let reversedNum = n.toString().split("").reduce((revStr, curNum)=> curNum + revStr)
  return parseInt(reversedNum) * Math.sign(n)
}

module.exports = reverseInt;


// function reverseInt(n) {
//   let reversedNumStr = n.toString().split("").reverse().join("")
//   if (n < 0){
//     return parseInt(reversedNumStr) * -1
//   }
//   return parseInt(reversedNumStr)
// }
