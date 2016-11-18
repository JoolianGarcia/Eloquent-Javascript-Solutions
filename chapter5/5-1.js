/*
CHAPTER 5
HIGH ORDER FUNCTIONS
*/


//Exercise 5.1
// FLATTENING: Use the reduce method in combination with the concat method to "flatten" an arra of arrays into a single array that has all the elements of the input arrays.

//declared array of arrays
var set1 = [
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9],
    [10, 11, 12, 13],
    [14, 15, 16]
];

//logs the reduce method on set1, uses sum as variable where reduction happnes, array is the value being iterated in the array (an array itself).
console.log(set1.reduce(function(sum, array) {
    return sum.concat(array);
}));
