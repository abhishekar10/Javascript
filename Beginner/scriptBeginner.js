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

//6. Write a function to add an element to an array and return the updated array.
//My Way
const addElementToArray = (inputArray,inputElement) => {
    if (Array.isArray(inputArray)) {
        if (inputElement) inputArray.push(inputElement);
        return inputArray;
    }
    else {
        return "Enter valid array"
    }
}

/*
 - Gets an array and element as inputs, check if the inputsArray is array. If yes, checks if inputElement is available, if yes adds and returns inputArray
 - Time complexity O(1) as push is used, if array too big enough, might have to use resize.
 - More effective is to use (!Array.isArray(inputArray)) instead  (Array.isArray(inputArray)) starting with else condition, in this case we can rewrite it as follows: 
if (!Array.isArray(inputArray))
    return "Enter valid array"
if (inputElement) inputArray.push(inputElement);
    return inputArray;
 - Note : Trying to avoid nested conditions in cases like these simplifies the logic used.
*/

//7. Write a function to convert a string to uppercase.
//My way
const convertToUpperCase = (inputString) => {
    if(!inputString || typeof (inputString) !== "string") return "Enter string";
    const lowerToUpperMap = {
        a: 'A', b: 'B', c: 'C', d: 'D', e: 'E',
        f: 'F', g: 'G', h: 'H', i: 'I', j: 'J',
        k: 'K', l: 'L', m: 'M', n: 'N', o: 'O',
        p: 'P', q: 'Q', r: 'R', s: 'S', t: 'T',
        u: 'U', v: 'V', w: 'W', x: 'X', y: 'Y',
        z: 'Z'
    };
    let result = "";
    for (let i of inputString) {
        if (lowerToUpperMap[i]) {
            result += lowerToUpperMap[i];
        }
        else {
            result += i;
        }
    }
    return result;
}

/*
 - This over the top solution doesn't use methods as they are needed to even use ASCII values.
 - Gets inputString and checks if it is present or if it is a string, if yes, creates an objects for lowercases as keys and uppercases as objects. Checks if the object has the lowercases and adds them to results.
 - Traverses through inputString so time complexity O(n) where n is the length of the inputAray. Used a object rather than a string initially thinking containing alphabets as traversing through the strings will add to complexity. Why is it not the case is exxplained below.
 - More effective to use two strings one containing lowercases and the other one containg uppercases. Initially thought the traversal could add to the time complexity but the max length of the string is 26, which means O(26) can be disregarded and considered as O(1) so using this is the same as using object as O(n *1)=O(n) 
 */

//8. Write a function to check if an element exists in an array.
//My way
const checkIfElementInArray = (inputArray, searchString) => {
    if(!inputArray) return "Enter Array";
    if (!searchString) return "Enter Search Value";
    if (!Array.isArray(inputArray)) return "Enter valid Array";
    if (searchString in inputArray) return "Element exists!";
    return "Element does not exist!"
}

/*
 - Gets two inputs - array and search string, checks for array and string presence when funciton is called, returns yes of exist.
 - 'searchString in inputArray' uses O(n) time complexity, where n is the length of the inputArray
 - Could be more efficient if this is a sorted array (for numbers) or a hashed object. Sorting/hashing could take their own time complexities, but susequent usage can be faster if they are created once.
  - Effective to use ternary operator if you find it more readable
*/

//9. Write a function that generates the multiplication table of a given number up to 10.
//My Way
const printMultiplicationTable = (inputNumber) => {
    if (!(typeof inputNumber === "number")) return "Enter a valid number";
    if (inputNumber) {
        for(let i = 1; i<11; i++) {
            console.log(inputNumber+" * "+i+" = "+inputNumber*i);
        }
        return;
    }
    return "Enter number";
}

/*
 - Gets an input number, checks if it's type is number, check if it is present, returns the multiplication table.
 - Time complexity is O(1) as the loop runs for a constant 10 times everytime.
 - Add more type checks for more effectiveness.
*/

//10. Write a function to remove the last element of an array.
//My Way
const popElement = (inputArray) => {
    if (!Array.isArray(inputArray)) return "Enter valid array";
    return inputArray.pop();
}

/*
 - Gets an array input, check if its a valid array, returns popped value
 - Time complexity O(1) as pop is used
 - Add more array based checks to improve effectiveness if required.
*/

//11. Write a function that swaps the values of two variables.
//My Way
const swapVariables = (variableOne, variableTwo) => {
    if (!(variableOne && variableTwo)) return "Enter both variables for swap";
    if(typeof variableOne !== "number" || typeof variableTwo !== "number") return "Both values should be numbers";
    let temporaryVariable = variableOne;
    variableOne = variableTwo;
    variableTwo = temporaryVariable;
    return "Values swapped!";
}

/*
 - Gets two input variable numbers, check their presence and availability, uses tempo variable to store first one's value as the swap occurs, returns the values once swapped.
 - Time complexity O(1)
 - Add more checks for the iputs if required for more effectiveness. Use a = a+b; b = a-b ; a = a-b; method if you don't want the temp variable.
*/

//12. Write a function to check if a string contains another string.
//My way
const checkForSubstring = (targetString, searchString) => {
    if(!targetString || !searchString) return "Enter two values";
    if(typeof targetString !== "string" || typeof searchString !== "string") return "Enter valid strings";
    if(targetString.length < searchString.length) return "Search string bigger than target string";
    if(targetString.includes(searchString)) return "Search string is a substring"
    return "String not available."
 }

/*
 - Gets two string inputs, target and search string.
 - Check types and presence, use includes if it is present in the target
 - Time complexity is technically O(n*m) where n is the length of target and m is the length of search, but includes mostly fall in on averge of near O(n) due to searchString only going once maximum i.e., not everytime m will be iterated with n.
 - Effective to use validations on strings if required
*/

//13. Write a function to check if a number is a prime number.
//My Way
const checkPrime = (inputNumber) => {
    if (!inputNumber) return "Enter number";
    if (!(typeof inputNumber === "number")) return "Enter valid number";
    for (let i = 2 ; i < inputNumber; i++) {
        if(inputNumber%i === 0) {
            return "Number not a prime";
        }
    }
    return "Number is a prime";
}

/*
 - Gets input number, checks for type and availability, iterates till that number, and breaks if divisible by any intermedeite number.
 - Iterates to a maximum of inputNumber, time complexity = O(inputNumber)
 - Can be done more efficently with using i <= Math.sqrt(inputNumber) , where time comp is now O(√inputNumber), which could be very efficent for larger numbers.
  - Could use more validations to check if positive and so if required for more effectiveness.
*/

//14. Write a function to count the number of vowels in a string.
//My Way
const countVowels = (inputString) => {
    if (!inputString) return "Enter String";
    if (typeof inputString !== "string") return "Enter valid string";
    let vowelsString = 'aeiouAEIOU';
    let count = 0;
    for (let i of inputString) {
        if (vowelsString.includes(i)) {
            count++;
        }
    }
    return count;
}

/*
 - Gets an input string, checks type and availability, creates a string 'aeiouAEIOU' and number count to compare and store vowels respectively.
 - Iterates through the input string, time complexity O(length of inputString)
 - Efficient to use sets instead of string for vowelString (vowelsSet = new Set('aeiouAEIOU)) as JS appraently uses includes at a time comp O(1) instead of O(10) in this case fpr string. Also no need to use !inputString condition as typeof not being string is included.
 - Use return [...inputString].reduce((count, char) => vowelsSet.has(char) ? count + 1 : count, 0); if this is more readable instead of the loop used.
*/

//15. Write a function to add a new property to an object.
//My way
const addProperty = (inputObject, keyToAdd, valueToAdd) => {
    if (typeof inputObject !== "object" || Array.isArray(inputObject)) return "Enter valid object";
    if (!keyToAdd) return "Enter Key";
    if (!valueToAdd) return "Enter value for the key";
    inputObject[keyToAdd] = valueToAdd ;
    return "Value added";
}

/*
 - Gets 3 inputs - object, key and value. Checks if all the availabilities and types, add the value to the key of the object. 
 - Time Comp O(1)
 - For more effectiveness, add more edge cases for value and key, even return the object instead of "Value Added" 

*/

//16. Write a function to check if a string ends with a specific substring.
//My Way
const checkEndsWithSubstring = (inputString, inputSubString) => {
    if(typeof inputString !== "string" || typeof inputSubString !== "string") return "Enter valid strings";
    const index = -(inputSubString.length);
    if (inputString.slice(index) === inputSubString) return "Ends with the substring"
    return "Not ends with substring"
}

/*
 - Gets two string inputs, checks for type, create an index which holds the negative of length of sub string.
 - slice traverses through the length of sub string, time complexity O(n) where n is the length of sub string input
 - Instead of creating index and using slice, we can use endsWith (inputString.endsWith(inputSubString)). Used slice as didn't know this method existed, same time comp, but less space and more effective.
*/

//17. Write a function to find the largest number in an array.
//My Way
const getMaxValue = (inputArray) => {
    if(!Array.isArray(inputArray)) return "Enter an array";
    let maxVal = 0;
    for (let i of inputArray) {
        if (i > maxVal) maxVal = i ;
    }
    return maxVal;
}

/*
 - Gets an inputArray, checks type, uses a maxVal variable to store the maximum Value.
 - Traverses through the array, time complexity = O(n) where n is the length of the input array
 - Obvious flaw in this code is that maxVal starts with 0, so the value will be returned as 0 for an array of all negative numbers. A way to counter this is to use -Infinity instead of 0, which means the maxVal is the lowest possible value to start with.
 - Add more validations for the array elements to consider the comparison is done without any side effects.
*/

//18. Write a function to find the sum of digits of a given number.
//My Way
const sumOfDigits = (inputNumber) => {
    if (typeof inputNumber !== "number") return "Enter valid number";
    let sum = 0;
    let tempVariable = inputNumber ;
    while (tempVariable > 0) {
        let reminder = tempVariable % 10;
        sum += reminder;
        tempVariable = Math.floor(tempVariable/10);
    }
    return "Sum of digits : "+sum;
}

/*
 - Gets an input number, check if its a number, uses reminder,sum and temp variable to return the sum of digits
 - Traverses through the number via flooring, Time Complexity = O(n), where n is the number of digits.
 - Can add more cases to check if negative, or just return the sum if the sum alone is needed based on requirements. 
*/

// Write a function to repeat a string n times.

// Write a function to reverse an array.