/*
CHAPTER 4: DATA STRUCTURES: OBJECTS AND ARRAYS
Storing values in objects and arrays, understanding more complex data structures.
*/

//Write a function range that takes two inputs (start, end) and returns an array containing all the numbers from start up to the end.

function range(start, end) {
    var rangeU = [];
    for (var x = start; x < end; x++) {
        rangeU.push(x);

    }
    return rangeU;
}

console.log(range(3, 19));
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

/*
CHAPTER 4: DATA STRUCTURES: OBJECTS AND ARRAYS
Storing values in objects and arrays, understanding more complex data structures.
*/
/*
//1: SUM OF A RANGE
Write a function range that takes two inputs (start, end) and returns an array containing all the numbers from start up to the end.*/

function range(start, end) {
    //makes the array a local variable so that its empty everytime the function runs
    var rangeU = [];
    for (var x = start; x < end; x++) {
        rangeU.push(x);

    }
    return rangeU;
}

console.log(range(3, 19));

//Write a sum function that takes an array of numbers and returns the sum of these numbers.

function sum(array) {
    //Creates a variable that stores the sum value
    var totalSum = 0;
    //Walks through the array
    for (var x = 0; x < array.length; x++) {
        //adds each array value
        totalSum += array[x];
    }
    //returns needed piece of information (sum)
    return totalSum;
}

console.log(sum(range(1, 10)));

//Modify the original function so that includes a step parameter, a sum in-between numbers in the array value.
//If the step is not specified, it should be auotmated to 1

function range(start, end, step) {
    var rangeU = [];

    if ((start > end) && (step < 0)) {
        for (var x = start; x >= end; x -= step) {
            rangeU.push(x);
        }
    } else if (step == undefined) {
        for (var x = start; x <= end; x += 1) {
            rangeU.push(x);
        }
    } else {
        for (var x = start; x <= end; x += step) {
            rangeU.push(x);
        }
    }

    return rangeU;

}

//Modify your range function to take an optional third argument that indicates the “step” value used to build up the array.
//If no step is given, the array elements go up by increments of one, corresponding to the old behavior.
//Make it possible to use negative numbers as step values.


function range(start, end, step) {
    var rangeU = [];

    if ((start > end) && (step === undefined)) {
        for (var x = start; x >= end; x--) {
            rangeU.push(x);
        }
    } else if ((start > end) && (step < 0)) {
        for (var y = start; y >= end; y += step) {
            rangeU.push(y);
        }
    } else if (step === undefined) {
        for (var a = start; a <= end; a++) {
            rangeU.push(a);
        }
    } else {
        for (var z = start; z <= end; z += step) {
            rangeU.push(z);
        }
    }

    return rangeU;

}
console.log(range(10, 40, 2));
console.log(range(40, 30));
console.log(range(60, 40, -3));
console.log(range(5, 2, -1));


//Write a function reverseArray that takes an array as an argument and produces a new array that has the same elements in reverse order.

var floridaCities = ["Miami", "Tallahassee", "Orlando", "Tampa", "Jacksonville"];

function reverseArray(array) {
    var reversedArray = [];
    for (var x = (array.length - 1); x >= 0; x--) {
        reversedArray.push(array[x]);
    }
    return reversedArray;
}


console.log(reverseArray(floridaCities));


//Write a function reverseArrayInPlace that does what the reverse Array method does, no new Arrays!!!

function reverseArrayInPlace(array) {

    //Walks through the array, starting from its end.
    // Loop is >=0 because array[] is used to log values in specified indexes.
    for (var i = (array.length - 1); i >= 0; i--) {
        array.push(array[i]);
        console.log(array);
    }

    //Walks through the first half of the array starting at highest value
    //Movex backwards and shifts (removes) the value
    for (var z = Math.floor(array.length / 2); z >= 1; z--) {
        console.log(array);
        array.shift();
    }

    return array;
}

var arrayValue = [12, 13, 14, 15, 16, 17];


console.log(reverseArrayInPlace(arrayValue));

/* 3: A LIST
Write a function arrayToList that builds a List data sctructure from the array [1,2,3]
Then Write a listToArray function that produces an array from a list.
Also write the helper functions prepend, which takes an element and a list and creates a new list that adds
the element to the front of the input list, and nth, which takes a list and a number returns the element at the given position in the list, or undefined when there is no such element.
*/

function arrayToList(array) {

    var list = null;
    for (var z = (array.length - 1); z >= 0; z--) {
        list = {
            value: array[z],
            list: list
        };

    }
    return list;
}

var arrayValue = [1, 2, 3];

console.log(arrayToList(arrayValue));


function listToArray(list) {
    var newArray = [];
    for (var node = list; node; node = node.list) {
        newArray.push(node.value);
    }

    return newArray;
}
console.log(listToArray(arrayToList(arrayValue)));

//PREPEND FUNCTION

function prepend(element, list) {
    var newList = {
        value: element,
        list: list
    }
    return newList;

}

var listTest = {
    value: 1,
    list: {
        value: 2,
        list: {
            value: 3,
            list: null
        }
    }
};
var newElement = 5;

console.log(prepend(newElement, listTest));

//RECURSIVE NTH FUNCTION

//Starts counter at 1, can be made into 0 depending on desired counting style
var counter = 1;

function nth(list, numberPass) {
    //console statements to test current status of function variables
    console.log("Current counter is: " + counter);
    console.log("Looking for position: " + numberPass);

    if (counter == numberPass) {
        return list;

    } else if (!list) {
        return undefined;
    } else {
        console.log("I am using the else part of this looop");
        list = list.list;
        counter++;
        //Makes nth a recursive function, returns itself until a solution is found.
        return nth(list, numberPass);
    }

}

//Declaration of Object as variable
var listTest = {
    value: 1,
    list: {
        value: 2,
        list: {
            value: 3,
            list: null
        }
    }
};

var numberCheck = 3;
console.log(nth(listTest, numberCheck));

/*
4: DEEP COMPARISON
Write a function deepEqual that takes two values and returns ture only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.
*/

function deepEqual(value1, value2) {
    //initial equality truthy
    if (value1 === value2) {
        return true;
    }
    //if both values are objects...
    if ((typeof value1 == "object" && !null) &&
        (typeof value2 == "object" && !null)) {
        var value1Count = 0;
        var value2Count = 0;
        //Counter 1
        for (var y in value1) {
            value1Count++;
        }
        //Counter 2
        for (var k in value2) {
            value2Count++;
        }
        //Counter - Amount of properties check
        if (value1Count !== value2Count) {
            return false;
        }
        //Walk through first object and computer property values. Upon dissonance, false is returned.
        for (var v in value1) {
            if (!deepEqual(value1[v], value2[v])) {
                return false;
            }
        }
        return true;

    } else if (value1 !== value2) {
        return false;
    }


}
var group = {
    first: 1,
    second: 2,
    third: 8,
    fourth: 5
};
var group2 = {
    first: 1,
    second: 2,
    third: 8,
    fourth: 5
};
var yy = 5;
var xx = 4;

console.log(deepEqual(group, group2));
console.log(deepEqual(xx, yy));
