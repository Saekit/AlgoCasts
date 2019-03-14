// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //create empty array
  //create index start at 0
  //while index is less than array.length
    //push a slice of length 'size' from 'array' into empty array
    //add 'size' to 'index'
  let chunked = []
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size))
  }
  return chunked
}

module.exports = chunk;

// function chunk(array, size) {
  //create an empty array to hold the chunks
  //for each element in the "unchunked" array
    //retrieve the last element in 'chunked'
    //if last element does not exist, or if its length is equal to chunk size
      //push new chunk into 'chunked' with the current element
    //else add the current element into the chunk
//     const chunked = []
//     for (let elem of array) {
//       const last = chunked[chunked.length -1]
//       if (!last || last.length === size) {
//         chunked.push([elem])
//       } else {
//         last.push(elem)
//       }
//     }
//     return chunked
// }
