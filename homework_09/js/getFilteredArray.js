
/*
Task #3
Write a function - getFilteredArray
It should accept array and function (called predicate function) as arguments and returns a new filtered array. A predicate function accepts an item in the array, and returns a boolean indicating whether the item should be retained in the new array.
For example: 
function predicateFunction(num) { 
return num > 3;	
} // returns boolean value
getFilteredArray([1, 7, 20], predicateFunction); // -> [7, 20]

Note: reuse your forEach function

*/