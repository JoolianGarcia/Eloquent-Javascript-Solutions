/*
CHAPTER 4: DATA STRUCTURES: OBJECTS AND ARRAYS
Storing values in objects and arrays, understanding more complex data structures.
*/

/*
4.1: SUM OF A RANGE
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

//4.2 Write a sum function that takes an array of numbers and returns the sum of these numbers.

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

/*
4.3: A LIST
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
4.4: DEEP COMPARISON
Write a function deepEqual that takes two values and returns true only if they are the same value 
or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.
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
