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

// Create a function that checks if a given string is a palindrome, ignoring spaces, punctuation, and case.

// Implement a function to remove duplicates from an array without using Set.

// Write a function that finds the first non-repeating character in a string and returns it. If all characters repeat, return null.

// Given an array of objects representing products (with name and price), sort them in ascending order of price.

// Create a function to flatten a nested array of any depth into a single-level array.

// Write a function to count the occurrences of each word in a given sentence and return an object with word counts.

// Implement a function to group an array of strings by their first character into an object.

// Write a function to validate if a given string is a valid IPv4 address.

// Write a function to calculate the sum of all prime numbers less than a given number n.

// Create a function that takes a string and returns a new string with the characters sorted in alphabetical order.

// Write a function to merge two sorted arrays into a single sorted array without using built-in sorting methods.

// Write a function that calculates the nth Fibonacci number without using recursion (iterative approach).

// Write a function to find the intersection of two arrays, returning only the common elements.

// Implement a function to rotate an array n steps to the right, where n is a given number.

// Write a function to calculate the time difference between two timestamps in the format "HH:MM:SS" and return the result in hours and minutes.

// Write a function to check if a string has balanced parentheses (e.g., "(())" is balanced, but "(()" is not).

// Write a function that returns all possible permutations of a given string.

// Create a function to generate a random string of a given length using alphanumeric characters.

// Implement a function to calculate the factorial of a number using memoization to optimize repeated calculations.