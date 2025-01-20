//1. Implement a function to find all unique permutations of a given string.

const uniquePermutations = (str) => {
    const result = [];
    const used = Array(str.length).fill(false);
    const permute = (current) => {
        if (current.length === str.length) {
            result.push(current);
            return;
        }
        for (let i = 0; i < str.length; i++) {
            if (used[i]) continue;
            if (i > 0 && str[i] === str[i - 1] && !used[i - 1]) continue;
            used[i] = true;
            permute(current + str[i]);
            used[i] = false;
        }
    }
    permute('');
    return result;
}

console.log(uniquePermutations('aabb'));

/*
     - Gets an input string and returns all unique permutations of the string.
     - Time complexity is O(n!), where n is the length of the input string.
*/

//2. Write a function to calculate the nth Fibonacci number using memoization. 

const fibonacci = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
}

console.log(fibonacci(10));

/*
    - Gets an integer n and returns the nth Fibonacci number using memoization.
    - Time complexity is O(n). Where n is the input integer.
*/

//3. Create a deep clone function for an object, handling nested objects and arrays.  

const deepClone = (obj) => {
    if (obj === null || typeof obj !== 'object') return obj;
    const clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

const obj = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    }
}

const clone = deepClone(obj);
console.log(clone);

/*
    - Gets an object and returns a deep clone of the object.
    - Time complexity is O(n), where n is the number of keys in the input object.
*/

//3. Implement a function to determine if a string is a valid palindrome, ignoring spaces and special characters.

const isPalindrome = (str) => {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = cleanStr.length - 1;
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) return false;
        left++;
        right--;
    }
    return true;
}

/*
    - Gets a string and returns true if it is a valid palindrome, ignoring spaces and special characters.
    - Time complexity is O(n), where n is the length of the input string.
*/

//5. Write a function to flatten a deeply nested array without using built-in methods like `flat()`.

const flattenArray = (arr) => {
    const result = [];
    const flatten = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flatten(arr[i]);
            } else {
                result.push(arr[i]);
            }
        }
    }
    flatten(arr);
    return result;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]));

/*
    - Gets a deeply nested array and returns a flattened array.
    - Time complexity is O(n), where n is the total number of elements in the input array.
*/

//6. Build a custom implementation of the `Promise.all()` method.

const promiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
        promises.forEach((promise, index) => {
            promise.then((result) => {
                results[index] = result;
                completed++;
                if (completed === promises.length) {
                    resolve(results);
                }
            }).catch(reject);
        });
    });
}

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));

promiseAll([promise1, promise2]).then((results) => {
    console.log(results);
});

/*
    - Gets an array of promises and returns a promise that resolves when all promises are resolved.
    - Time complexity is O(n), where n is the number of promises in the input array.
*/

//7. Write a function to convert a Roman numeral to an integer.  

const romanToInt = (s) => {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && romanValues[s[i]] > romanValues[s[i - 1]]) {
            result += romanValues[s[i]] - 2 * romanValues[s[i - 1]];
        } else {
            result += romanValues[s[i]];
        }
    }
    return result;
}

console.log(romanToInt('MCMXCIV'));

/*
    - Gets a Roman numeral string and returns the corresponding integer value.
    - Time complexity is O(n), where n is the length of the input string.
*/

// - Implement a function to find the longest substring without repeating characters.  
// - Create a function to solve the "N-Queens" problem for a given board size.  
// - Implement a debounce function and demonstrate its usage.  
// - Write a function to generate all subsets (power set) of a given array.  
// - Create a function to check if two strings are anagrams of each other.  
// - Implement a function to perform a binary search on a sorted array.  
// - Write a function to merge overlapping intervals from a list of intervals.  
// - Implement a function to detect if a given directed graph contains a cycle.  
// - Write a function to solve the "Tower of Hanoi" problem.  
// - Create a function to implement the LRU (Least Recently Used) cache mechanism.  
// - Write a function to find the maximum sum subarray using the Kadane’s algorithm.  
// - Implement a function to serialize and deserialize a binary tree.  
// - Create a function to solve the "Word Break" problem using dynamic programming.  