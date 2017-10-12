/*
ELOQUENT JAVASCRIPT
Book exercises done fo' realz
*/

//CHAPTER 2: PROGRAM STRUCTURE

//Looping a triangle:

var main = '#';

while (main.length <= 7) {
    console.log(main);
    main += '#';
}

console.log(" ");
console.log(" ");

for (var x = '#'; x.length <= 7; x += '#') {
    console.log(x);
}

//FIZZBUZZ: Write a program that writes all number from 1 to 100
//For numbers divisible by 3 print "Fizz" and for numbers divisible by 5 print "Fuzz"
//For number divisible by both 3 and 5, print "FizzBuzz"

for (var x = 1; x <= 100; x++) {
    if ((x % 3 === 0) && (x % 5 === 0)) {
        console.log("FizzBuzz");
    } else if (x % 3 === 0) {
        console.log("Fizz");
    } else if (x % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(x);
    }

}


/*
CHESSBOARD
Write a program that creates a string that represents an 8x8 grid, using new-line characters to separate lines.
At each position of the grid there is eithera space or a "#" character. The chacters should form a chess board.
Passing this string to console.log should show the final result.
When it works, define a variable that defines the width and height of the grid. var size = x.
*/

var size = 8;
var numberSign = "#";
var space = " ";
var main = "";
var lineBreak = '\r'

//In a nested for loop inside another for loop, an instance of the loop triggers an instance of the other loop which runs as long as needed.
//The trick is to think of a serialized matrix, that prints each dimension based on individual for loops >:)

for (var y = 0; y < size; y++) {

    for (var x = 0; x < size; x++) {

        if ((x % 2 === 0) && (y % 2 === 0)) {
            main += numberSign;
            main += space;

        } else if ((!(x % 2 === 0)) && (!(y % 2 === 0))) {
            main += space;
            main += numberSign;
        }

    }
    main += lineBreak;
}

console.log(main);
