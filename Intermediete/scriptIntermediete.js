//1. Write a function that takes an array of numbers and returns the second largest number.
//My Way
const secondLargest = (inputArray) => {
    if (!Array.isArray(inputArray)) return "Enter valid array";
    inputArray = new Set(inputArray);
    inputArrayLength = inputArray.length
    for (let i = 0 ; i < inputArrayLength ; i++) {
        for (let j = i+1 ; j < inputArrayLength ; j++) {
            if (inputArray[i] > inputArray[j]) {
                inputArray[i] += inputArray[j];
                inputArray[j] = inputArray[i] - inputArray[j];
                inputArray[i] -= inputArray[j];
            }
        }
    }
    return inputArray[inputArrayLength-2];
}

/*
 - Gets an array input, checks type. Makes it a set so there aren't two values of the same value. Sorts array and returns second last value. 
 - Nested loop for sorting, time complexity = O(inputArrayLength^2)
 - More efficient to use the logic as follows :
 for (const num of uniqueArray) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num < largest) {
        secondLargest = num;
    }
 }
 - The above code has time comp of O(inputArrayLength), add more validations on the array to include array length more than one etc/. if required.
*/

//2. Create a function that checks if a given string is a palindrome, ignoring spaces, punctuation, and case.
//My Way
const checkIfPalindrome = (inputString) => {
    if(typeof inputString !== "string") return "Enter valid string";
    const currentString = inputString.toLowerCase();
    let correctedString = "";
    let reverseString = "";
    for (let i = currentString.length-1 ; i >= 0 ; i--) {
        let j = currentString[i];
        if ( j !== ' ' &&  j !== '.' && j!== ',' && j!== '?' && j!== '!') {
            reverseString += j;
            correctedString = j + correctedString;
        }
    }
    if (reverseString === correctedString) return true;
    return false ;
}

/*
 - Gets an input string, checks if valid string, moves to lower case, creates two strings to compare, runs a loopto check if there is no punctuation and add them to the strings, return if they are same or not.
 - Loop travserses through inputString, time complexity = O(n) ,where n is the length of inputString
 - Instead of the whole loop block, we can use 
        const correctedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, "");
        const reverseString = correctedString.split("").reverse().join("");
 - Instead of the last if block, we can just use return reverseString === correctedString.
*/

//3. Implement a function to remove duplicates from an array without using Set.
const removeDuplicates = (inputArray) => {
    if (!Array.isArray(inputArray)) return "Enter valid list";
    let counter = {};
    let newArray = [];
    for (let i of inputArray) {
        if (!counter[i]) {
                counter[i] = true;
                newArray.push(i);
        }
    }
    return newArray;
}
/*
 - Gets an input array, checks if it is an array, creates a key to store the values if they exist already, creates a new array
 - For each element in input array, if key value exists in the counter object, the value is not added. Time complexity = O(n) where n is the length of inputArray
*/

//4. Write a function that finds the first non-repeating character in a string and returns it. If all characters repeat, return null.
const findRepeatingChar = (inputString) => {
    if(typeof inputString !== "string") return "Enter valid string";
    let counter = {};
    for (let i of inputString) {
        if (!counter[i]) {
            counter[i] = 1;
        } else {
            counter[i]++;
        }
    }
    for (let i in counter) {
        if (counter[i] === 1) return i;
    }
    return null;
}

/*
    - Gets an input string, checks if it is a string, creates a key to store the values if they exist already, creates a new key and value if not.
    - For each element in input string, if key value exists in the counter object, the value is not added. Time complexity = O(n) where n is the length of inputString
*/

//5. Given an array of objects representing products (with name and price), sort them in ascending order of price.
const sortProducts = (inputArray) => {
    if (!Array.isArray(inputArray)) return "Enter valid array";
    inputArray.sort((a,b) => a.price - b.price);
    return inputArray;
}

/*
    - Gets an input array, checks if it is an array, sorts the array based on the price of the objects in the array.
     - Time complexity = O(nlogn) where n is the length of inputArray
*/

//6. Create a function to flatten a nested array of any depth into a single-level array.
const flattenArray = (inputArray) => {
    if (!Array.isArray(inputArray)) return "Enter valid array";
    return inputArray.flat(Infinity);
}

/*
    - Gets an input array, checks if it is an array, uses the flat method to flatten the array to a single level.
    - Time complexity = O(n) where n is the length of inputArray
*/

//7. Write a function to count the occurrences of each word in a given sentence and return an object with word counts.
const countWords = (inputString) => {
    if(typeof inputString !== "string") return "Enter valid string";
    let counter = {};
    let words = inputString.split(" ");
    for (let i of words) {
        if (!counter[i]) {
            counter[i] = 1;
        } else {
            counter[i]++;
        }
    }
    return counter;
}

/*
    - Gets an input string, checks if it is a string, splits the string into words, creates a key to store the values if they exist already, creates a new key and value if not.
    - For each element in input string, if key value exists in the counter object, the value is not added. Time complexity = O(n) where n is the length of inputString
*/

//8. Implement a function to group an array of strings by their first character into an object.
const groupByFirstChar = (inputArray) => {
    if (!Array.isArray(inputArray)) return "Enter valid array";
    let counter = {};
    for (let i of inputArray) {
        if (!counter[i[0]]) {
            counter[i[0]] = [i];
        } else {
            counter[i[0]].push(i);
        }
    }
    return counter;
}

/*
    - Gets an input array, checks if it is an array, creates a key to store the values if they exist already, creates a new key and value if not.
    - For each element in input array, if key value exists in the counter object, the value is not added. Time complexity = O(n) where n is the length of inputArray
*/

//9. Write a function to validate if a given string is a valid IPv4 address.
const validateIPv4 = (inputString) => {
    if(typeof inputString !== "string") return "Enter valid string";
    let ip = inputString.split(".");
    if (ip.length !== 4) return false;
    for (let i of ip) {
        if (i < 0 || i > 255 || isNaN(i)) return false;
    }
    return true;
}

/*
    - Gets an input string, checks if it is a string, splits the string into parts, checks if the length is 4, checks if each part is between 0 and 255 and is a number.
    - Time complexity = O(n) where n is the length of inputString
*/

//10. Write a function to calculate the sum of all prime numbers less than a given number n.
const getSumOfPrimes = (n) => {
    if (typeof n !== "number") return "Enter valid number";
    let sum = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) sum += i;
    }
    return sum;
}

const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

/*
    - Gets an input number, checks if it is a number, checks if the number is prime, adds the prime number to the sum.
    - Time complexity = O(n*sqrt(n)) where n is the input number
*/

//11. Create a function that takes a string and returns a new string with the characters sorted in alphabetical order.
const sortString = (inputString) => {
    if(typeof inputString !== "string") return "Enter valid string";
    return inputString.split("").sort().join("");
}

/*
    - Gets an input string, checks if it is a string, splits the string into characters, sorts the characters and joins them back.
    - Time complexity = O(nlogn) where n is the length of inputString
*/

//12. Write a function to merge two sorted arrays into a single sorted array without using built-in sorting methods.
const mergeSortedArrays = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Enter valid array";
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
}

/*
    - Gets two input arrays, checks if they are arrays, creates a new array, compares the first element of both arrays and adds the smaller one to the new array.
    - Time complexity = O(n) where n is the length of both input arrays
*/

//13. Write a function that calculates the nth Fibonacci number without using recursion (iterative approach).
const fibonacci = (n) => {
    if (typeof n !== "number") return "Enter valid number";
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n];
}

/* 
    - Gets an input number, checks if it is a number, creates an array with the first two fibonacci numbers, calculates the nth fibonacci number.
    - Time complexity = O(n) where n is the input number
*/

//14. Write a function to find the intersection of two arrays, returning only the common elements.
const findIntersection = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Enter valid array";
    let intersection = [];
    for (let i of arr1) {
        if (arr2.includes(i)) intersection.push(i);
    }
    return intersection;
}

/*
    - Gets two input arrays, checks if they are arrays, creates a new array, checks if the element of first array is in the second array and adds it to the new array.
    - Time complexity = O(n) where n is the length of both input arrays
*/

//15. Implement a function to rotate an array n steps to the right, where n is a given number.
const rotateArray = (arr, n) => {
    if (!Array.isArray(arr) || typeof n !== "number") return "Enter valid array and number";
    let index = n % arr.length;
    return arr.slice(-index).concat(arr.slice(0, -index));
}

/*
    - Gets an input array and a number, checks if they are an array and a number, calculates the index to rotate the array, rotates the array.
    - Time complexity = O(n) where n is the length of the input array
*/

//16. Write a function to calculate the time difference between two timestamps in the format "HH:MM:SS" and return the result in hours and minutes.

const timeDifference = (time1, time2) => {
    if (typeof time1 !== "string" || typeof time2 !== "string") return "Enter valid time";
    let [hours1, minutes1, seconds1] = time1.split(":").map(Number);
    let [hours2, minutes2, seconds2] = time2.split(":").map(Number);
    let time1InSeconds = hours1 * 3600 + minutes1 * 60 + seconds1;
    let time2InSeconds = hours2 * 3600 + minutes2 * 60 + seconds2;
    let difference = Math.abs(time1InSeconds - time2InSeconds);
    let hours = Math.floor(difference / 3600);
    let minutes = Math.floor((difference % 3600) / 60);
    return `${hours} hours and ${minutes} minutes`;
}

/*
    - Gets two input times, checks if they are strings, splits the times into hours, minutes and seconds, calculates the time in seconds, calculates the difference in seconds, converts the difference to hours and minutes.
    - Time complexity = O(1)
*/

//17. Write a function to check if a string has balanced parentheses (e.g., "(())" is balanced, but "(()" is not).

const checkBalancedParentheses = (inputString) => {
    if(typeof inputString !== "string") return "Enter valid string";
    let stack = [];
    for (let i of inputString) {
        if (i === "(") {
            stack.push(i);
        } else if (i === ")") {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}

/*
    - Gets an input string, checks if it is a string, creates a stack, for each element in the string, adds to the stack if it is an opening parenthesis, removes from the stack if it is a closing parenthesis.
    - Time complexity = O(n) where n is the length of the input string
*/

//18. Write a function that returns all possible permutations of a given string.
const permutations = (inputString) => {
    if(typeof inputString !== "string") return "Enter valid string";
    if (inputString.length === 0) return [""];
    let result = [];
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        let remainingChars = inputString.slice(0, i) + inputString.slice(i + 1);
        for (let perm of permutations(remainingChars)) {
            result.push(char + perm);
        }
    }
    return result;
}

/*
    - Gets an input string, checks if it is a string, if the string is empty, returns an empty string, for each character in the string, creates a new string with the character removed and calls the function recursively.
    - Time complexity = O(n!) where n is the length of the input string
*/

// Create a function to generate a random string of a given length using alphanumeric characters.

// Implement a function to calculate the factorial of a number using memoization to optimize repeated calculations.