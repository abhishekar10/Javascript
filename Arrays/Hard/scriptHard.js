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

//8. Implement a function to find the longest substring without repeating characters.

const lengthOfLongestSubstring = (s) => {
    const map = {};
    let left = 0;
    let max = 0;
    for (let right = 0; right < s.length; right++) {
        if (map[s[right]] >= left) {
            left = map[s[right]] + 1;
        }
        map[s[right]] = right;
        max = Math.max(max, right - left + 1);
    }
    return max;
}

/*
    - Gets a string and returns the length of the longest substring without repeating characters.
    - Time complexity is O(n), where n is the length of the input string.
*/

//9. Create a function to solve the "N-Queens" problem for a given board size. 

const solveNQueens = (n) => {
    const result = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
    }
    const solve = (row) => {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                solve(row + 1);
                board[row][col] = '.';
            }
        }
    }
    solve(0);
    return result;
}

console.log(solveNQueens(4));

/*
    - Gets an integer n and returns all solutions to the N-Queens problem for a board of size n x n.
    - Time complexity is O(n!), where n is the input integer.

*/

//10. Implement a debounce function and demonstrate its usage.  

const debounce = (func, delay) => {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    }
}

const log = debounce(() => console.log('Hello'), 1000);
log();
log();
log();

/*
    - Gets a function and a delay time and returns a debounced version of the function.
    - Time complexity is O(1).
*/

//11. Write a function to generate all subsets (power set) of a given array.

const subsets = (nums) => {
    const result = [];
    const generate = (index, current) => {
        result.push(current);
        for (let i = index; i < nums.length; i++) {
            generate(i + 1, current.concat(nums[i]));
        }
    }
    generate(0, []);
    return result;
}

console.log(subsets([1, 2, 3]));

/*
    - Gets an array of integers and returns all subsets of the array.
    - Time complexity is O(2^n), where n is the length of the input array.
*/

//12. Create a function to check if two strings are anagrams of each other.

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    const map = {};
    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }
    for (let char of t) {
        if (!map[char]) return false;
        map[char]--;
    }
    return true;
}

console.log(isAnagram('anagram', 'nagaram'));

/*
    - Gets two strings and returns true if they are anagrams of each other.
    - Time complexity is O(n), where n is the length of the input strings.
*/

//13. Implement a function to perform a binary search on a sorted array.

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4));

/*
    - Gets a sorted array and a target value and returns the index of the target value in the array.
    - Time complexity is O(log n), where n is the length of the input array.
*/

//14. Write a function to merge overlapping intervals from a list of intervals. 

const mergeIntervals = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = result[result.length - 1];
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            result.push(current);
        }
    }
    return result;
}

console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));

/*
    - Gets a list of intervals and returns a list of merged intervals.
    - Time complexity is O(n log n), where n is the number of intervals.
*/

//15. Implement a function to detect if a given directed graph contains a cycle.  

const hasCycle = (graph) => {
    const visited = new Set();
    const recStack = new Set();
    const hasCycleHelper = (node) => {
        if (recStack.has(node)) return true;
        if (visited.has(node)) return false;
        visited.add(node);
        recStack.add(node);
        for (let neighbor of graph[node]) {
            if (hasCycleHelper(neighbor)) return true;
        }
        recStack.delete(node);
        return false;
    }
    for (let node in graph) {
        if (hasCycleHelper(node)) return true;
    }
    return false;
}

const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
}

console.log(hasCycle(graph));

/*
    - Gets a directed graph and returns true if the graph contains a cycle.
    - Time complexity is O(V + E), where V is the number of vertices and E is the number of edges in the graph.
*/

//16. Write a function to solve the "Tower of Hanoi" problem.  

const towerOfHanoi = (n, source, target, auxiliary) => {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${target}`);
        return;
    }
    towerOfHanoi(n - 1, source, auxiliary, target);
    console.log(`Move disk ${n} from ${source} to ${target}`);
    towerOfHanoi(n - 1, auxiliary, target, source);
}

towerOfHanoi(3, 'A', 'C', 'B');

/*
    - Gets the number of disks and the names of the source, target, and auxiliary rods and prints the steps to solve the Tower of Hanoi problem.
    - Time complexity is O(2^n), where n is the number of disks.
*/

//17. Create a function to implement the LRU (Least Recently Used) cache mechanism.  

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }
    get(key) {
        if (!this.map.has(key)) return -1;
        const value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }
    put(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key);
        } else if (this.map.size === this.capacity) {
            this.map.delete(this.map.keys().next().value);
        }
        this.map.set(key, value);
    }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));

/*
    - Implements an LRU cache with get and put methods.
    - Time complexity is O(1).
*/

//18. Write a function to find the maximum sum subarray using the Kadane’s algorithm.  

const maxSubArray = (nums) => {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

/*
    - Gets an array of integers and returns the maximum sum of a subarray.
    - Time complexity is O(n), where n is the length of the input array.
*/

//19. Implement a function to serialize and deserialize a binary tree. 

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const serialize = (root) => {
    const result = [];
    const traverse = (node) => {
        if (node === null) {
            result.push('null');
            return;
        }
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return result.join(',');
}

const deserialize = (data) => {
    const nodes = data.split(',');
    const build = () => {
        const val = nodes.shift();
        if (val === 'null') return null;
        const node = new TreeNode(parseInt(val));
        node.left = build();
        node.right = build();
        return node;
    }
    return build();
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);
const serialized = serialize(root);
console.log(serialized);
const deserialized = deserialize(serialized);
console.log(deserialized);

/*
    - Implements serialization and deserialization of a binary tree.
    - Time complexity is O(n), where n is the number of nodes in the tree.
*/

//20. Create a function to solve the "Word Break" problem using dynamic programming.  