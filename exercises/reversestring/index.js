// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//debugger mode: cd into the example file, run: node inspect index.js, c, repl

function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '')
}

module.exports = reverse;

// function reverse(str) {
//   let arr = str.split("")
//   let newstr = ""
//   for(let i = arr.length-1; i >= 0; i--){
//     newstr += arr[i]
//   }
//   return newstr
// }


// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// function reverse(str) {
//   let reversed = ''
//   for (let char of str){
//     reversed = char + reversed
//   }
//   return reversed
// }
