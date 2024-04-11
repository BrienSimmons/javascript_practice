/*Print Even Numbers: Write a function that prints all the even numbers up to a given number. 
Try to make your solution efficient, perhaps by using loops in a creative way that minimizes 
the amount of code you write.*/

//input is 10
//output is [2, 4, 6, 8, 10]

function printEvenNumbers(limit) {
let evenNumbers = []
for(let i = 1; i <= limit; i++){
  let number = i
  //check to see if number is even. if it is, push it into the array of even numbers
  if(number % 2 == 0){
    evenNumbers.push(number)
  }
}
return evenNumbers
}

/*Multiplication Table: Create a function that prints out a multiplication table up to 10. 
Challenge yourself to make the solution scalable, so you could easily extend 
it to include more tables if needed.*/
function printMultiplicationTable() {

}

/*Length Converter: Develop a function that converts kilometers to miles.
 The function should take the input in kilometers and return the converted value in miles.*/
 function kilometersToMiles(kilometers) {
  let miles = kilometers/ 1.609
  return miles
}
  
/*Sum of Array: Write a function that calculates the sum of numbers within an array.
 Test your function with different sets of numbers, including both positive and negative numbers,
  as well as integers and decimals.*/

  //input: [-1, -2, -3]
   //output: -6


  //input: [-1, 2, -3, 4]
  //output: -2
  function sumArray(numbers) {
    let sum = 0
  //use a for loop
  for(let i = 0; i < numbers.length; i++){
    let number = numbers[i]
    sum = sum + number // or do this sum += number
  }
  return sum
}


/*Reverse Array: Create a function that reverses the order of an array.
 Start with a simple array of 5 numbers, 
 and then test your function with larger arrays to ensure it works correctly.*/
 
 // input: ["a", "b", "c"]
// output ["c", "b", "a"]
// configure a forlooop to iterate backwards over the 
// array as it iterates, push its value into reverseArray
  

 function reverseArray(arr) {
  let reverseArray = []
  for(let i = arr.length - 1; i >= 0; i--){
  let value = arr[i]
  reverseArray.push(value)
 }
  return reverseArray
}

/*Sort Array: Develop a function that sorts an array from lowest to highest. 
Ensure your function works with different types of arrays, including those with all integers, 
negative numbers, and decimals.*/
function sortArray(arr) {

}

/*Filter Negative Numbers: Write a function that takes an array as input and returns a new array with all negative numbers removed.*/
function filterNegativeNumbers(arr) {

}

/*Remove Spaces: Create a function that takes a string and returns a new string with all spaces removed. This can be useful for cleaning up data.*/
function removeSpaces(str) {

}

/*Divisible by 10: Write a function that returns a Boolean indicating whether a given number is divisible by 10.*/
function isDivisibleByTen(num) {

}

/*Count Vowels: Develop a function that counts the number of vowels in a given string and returns the count as an integer.*/
function countVowels(str) {

}


module.exports = { printEvenNumbers, printMultiplicationTable, kilometersToMiles, sumArray, reverseArray, sortArray, filterNegativeNumbers, removeSpaces, isDivisibleByTen, countVowels };
