/* CHAPTER 3: Functions
Understanding functions in JAVASCRIPT */

//Write a function min, that recreates the javascript built-in function Math.min allowing one to find the smallest of two given numbers.

function min(x, y) {
    if (x < y) {
        return x;
    } else if (y < x) {
        return y;
    } else if (x == y) {
        return "There is no minimum in this case";
    }
}

console.log(min(76, 10));



//Write a recursive function "isEven" that checks wheter a number is even
//Check with 0 or 1, and if greater call the recursive function by substracting 2

function isEven(number) {
    if (number >= 0) {
        if (number === 0) {
            return true;
        } else if (number === 1) {
            return false
        } else {
            console.log(number);
            return isEven(number - 2);
        }
    } else if (number < 0) {
        if (number === 0) {
            return true;
        } else if (number === 1) {
            return false
        } else {
            console.log(number);
            return isEven(number + 2);
        }
    }
}
console.log(isEven(5))
console.log(isEven(-200))


//Write a function that sweeps through a string and returns how many of a give character there in the string.
//string.charAt(N), is useful for this. It returns the character at the given position.



var letterB = 0;
var letter = 0;

function countBs(string) {

    for (var x = 0; x < (string.length - 1); x++) {
        if (string.charAt(x) == "B") {
            letterB++;
        }
    }

    return "There are " + letterB + " in the given string";

}

console.log(countBs("BB BASE"));

function countChar(string, character) {

    for (var x = 0; x < (string.length - 1); x++) {
        if (string.charAt(x) === character) {
            letter++;
        }
    }

    return "There are " + letter + " in the given string";

}

console.log(countChar("bibliothek", "o"));
