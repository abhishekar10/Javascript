//1. Write a function that calculates the square of a number.
//My way
const squareNumber = (squareInput) => {
    return squareInput*squareInput
};
console.log(squareNumber(3))
/* 
 - Gets an input number, multiples with itself, returns the squared value
 - Time complexity  O(1)
 - More effective way of writing code is to include cases such as "if (typeof squareInput !== "number") {
 throw new Error("Input must be a number");
 }" so the understanding is clear as to this code includes cases relevant to the problem handed.
*/

//2. Write a function that takes two strings and returns them concatenated.
//My way
const stringConcat = (stringInputOne, stringInputTwo) => {
    return stringInputOne+stringInputTwo;
};
console.log(stringConcat("Hello ","there"));

/*
 - Gets two string inputs, + symbol concats them as they are strings, return the concatenated output.
 - Time complexity O(n) where n is length of concatenated output string.
 - Another way is to use template literals, like return `${stringInputOne}${stringInputTwo}`
 - Effective to add cases in a way both inputs are string (Same as previous problem but use "string" instead of "number"), cases like undefined and null can be added as well.*/

//3. Write a function that returns the length of an array.No built-in methods
//My Way
const countArrayLength = (inputArray) => {
    let count = 0;
    for (let i in inputArray) {
        count++;
    }
    return count;
}
console.log(countArrayLength([1,2,3,5,6]));
/*
 - Gets an array input, increases count for each element in the array, returns count
 - Time complexity O(n) where n is the length of inputArray
 - Could use for-of as for-in can iterate indices and not values and indices could sometimes not be the best way to look for traversing.
 - Same as previous problems, use cases if needed for the use case.
*/

//4. Write a function to check if a number is positive, negative, or zero.
//My Way
const checkNumber = (numberInput) => {
    if(typeof numberInput === "number"){
        if(numberInput === 0){
            return "Zero";
        }
        else if(numberInput > 0) {
            return "Positive";
        }
        else{
            return "Negative";
        }
    }
    else {
        return "Enter a number";
    }
}

/*
     - Gets an input number, checks if its a number, if yes returns positive, negative or zero.
     - No traverse, arithmetic, time complexity = O(1)
     - A more effective way is to use default conditions instead of nested conditions, improves readability. For instance
     if numberInput === 0 return "Zero";
     if numberInput > 0 return "Positive";
     if numberInput < 0 return "Negative";
     - Usage of ternary operators if it is subjectively more readable - dependant of individuals
*/


//5. Write a function to get the value of a specified property in an object.
//My way
const returnValue = (inputObject, inputKey) => {
    if (typeof inputObject === "object") {
        if (inputKey in inputObject) {
            return inputObject[inputKey];
        }
        else {
            return "Key not available";
        }
    }
    else { 
        return "Enter valid object as input";
    }
}

/*
 - Gets an object and key as inputs, checks if the inputObject is an object, if yes, checks if the inputKey is present in the object, if yes returns the value.
 - JS Objects use hash table, time complec=xity O(1), assuming this is a straightforward object with no nested props
 - Effective way is to use hasOwnProperty ensures only the direct props (the ones we declare) are considered.
 - Ternary operator if considered more readable.
*/

// Write a function to add an element to an array and return the updated array.

// Write a function to convert a string to uppercase.

// Write a function to check if an element exists in an array.

// Write a function that generates the multiplication table of a given number up to 10.

// Write a function to remove the last element of an array.

// Write a function that swaps the values of two variables.

// Write a function to check if a string contains another string.

// Write a function to check if a number is a prime number.

// Write a function to count the number of vowels in a string.

// Write a function to add a new property to an object.

// Write a function to check if a string ends with a specific substring.

// Write a function to find the largest number in an array.

// Write a function to find the sum of digits of a given number.

// Write a function to repeat a string n times.

// Write a function to reverse an array.