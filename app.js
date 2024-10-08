// Exercises 1-4

const foods = ['pizza', 'cheeseburger'];
console.log(foods)

foods.unshift('taco');
console.log(foods);


const favFood = foods[1];
console.log(favFood);

// 5) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the Array.
// *VS code says .splice is not a function

// favFood.splice(2, 0, 'tofu');
// console.log(favFood);

// 6) Replace 'pizza' in the foods array with 'sushi' and 'cupcake'

// favFood.splice(1, 1, 'sushi', 'cupcake');
// console.log(favFood)

// 7) Use the 'slice' method to create a new array that contains 'sush' and 'cupcake'

const food = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger']; 
const yummy = food.slice(1,3)
console.log(yummy)

// 8) Using the `indexOf()` method, find the index of the string 'tofu' in the 'foods array'

const soyIdx = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger'];
console.log(soyIdx.indexOf('tofu'))

// 9) Use the `join()` method to concatenate the strings in the `foods` array, separated by ' -> '. 

const allFoods = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger'];
console.log(allFoods.join('->'));

// 10) Using the .includes() method, check if the `foods` array contains the string'soup'.

const hasSoup = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger'];
console.log(hasSoup.includes('soup'));

// 11) Choose a method to iterate through the `nums` array, Push each odd number to a new array named `odds`.

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = []
odds.push(5, 23, 15, 21, 9, 45, 7, 81);
console.log(odds);

for (let idx=0; idx < nums.length; idx++) {
    console.log(nums[idx]);
}

// 12) choose a method to iterate through the 'nums' array. As you loop, sort the numbers into new arrays based on the following rules

const numbers = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const fizz = []
const buzz = []
const fizzbuzz = []

for (let idx=0; idx < numbers.length; idx++) {
    console.log(numbers[idx]);
}

fizz.push(5, 7, 72, 9, 45, 66, 81,90);
buzz.push(100, 5, 15, 45, 90);
fizzbuzz.push(15, 45, 90);

console.log(fizz);
console.log(buzz);
console.log(fizzbuzz);

// 13 1) Assign the last nested array in the `numArrays` below to a variable named
//    `numList`. As you do this, also fulfill these goals:

//    - Assume you don't know how many nested arrays `numArrays` contains.
//    - Do not alter the original `numArrays` array.

const numList = [
    [100,5,23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];
console.log(numList);

// 14) Retrieve the number `66` from the `numArrays` array.
// Assign it to a variable called 'num'

const num = [
    [100,5,23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];
console.log(num[2][1]);

// 15 Use nested loops or `forEach()` methods to sum up all numbers within `numArrays` nested arrays.

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

let total = 0
for (let i=0; i< numArrays.length; i++){
    for (let j= 0; j < numArrays[i].length; j++) {
        total +=numArrays[i][j];
    }
}
console.log(total);
