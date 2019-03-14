// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) { //memoizer that will take a function as an argument
  const cache = {}; //record of all previous calls to this function
  return function(...args) { //returning the much faster function; ...args used as defensive coding since dont know how many arguments function will receive
    if (cache[args]) { //cache obj, key args; if these args have been called and stored then just return that now
      return cache[args];
    }

    const result = fn.apply(this, args) //apply this function and args on the function that was passed as an argument
    cache[args] = result; //taking result and storing it inside the cache obj in the key args
    return result;
  };
}

function slowFib(n) {
  if (n < 2){
    return n;
  }
  return fib(n-1) + fib(n-2);
}

const fib = memoize(slowFib);

module.exports = fib;

//iterative solution:
// function fib(n) {
//   const result = [0, 1]; //needs to start with 2 entries
//   for (let i=2; i<=n; i++){ //start i at 2 and iterate to n
//     const a = result[i-1]; //1
//     const b = result[i-2]; //0
//     result.push(a + b);
//   }
//   return result[n];
// }

//Recursive solution:
// function fib(n) {
//   if (n < 2){
//     return n;
//   }
//   return fib(n-1) + fib(n-2);
// }
