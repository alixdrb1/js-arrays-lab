/* Exercise 1

let foods = []

*/

//Exercise 2

let foods = ['pizza', 'cheeseburger'];

console.log(foods);

//Exercise 3

foods.unshift('taco');

console.log(foods);

//Exercise 4

let pizza = foods [1];

console.log(pizza);

let favFood = foods [1];

console.log(favFood);



// Exercise 5


foods.splice(2, 0, 'tofu');
console.log(foods);

// Exercise 6

foods.splice(1, 1, 'sushi', 'cupcake');
console.log(foods)

// Exercise 7

foods = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger']; 
let yummy = foods.slice(1,3)

console.log(yummy)

//Exercise 8

foods = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger']; 
let soyIdx = foods.indexOf("tofu");
console.log(soyIdx);

//Exercise 9

let allFoods = foods.join(" -> ");
console.log(allFoods);


//Exercise 10

let hasSoup = foods.includes("soup");
console.log(hasSoup);


//Exercise 11

let nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
let odds = []

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0 ) {
        odds.push(nums[i]);
    }
}

console.log(odds);

//Exercise 12

nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

for (let num of nums) {
console.log(num);
}

// fizz
let fizz = []


for (let num of nums) {
    if (num % 3 === 0) {
        fizz.push(num);
    }
}
console.log(fizz);



// buzz

let buzz = []
for (let num of nums) {
    if (num % 5 === 0) { 
        buzz.push(num); 
    }
}

console.log(buzz);

// fizzbuzz

let fizzbuzz = [];

for (const num of nums) {
    if (num % 3 === 0 && num % 5 === 0) { 
        fizzbuzz.push(num);
    }
}

console.log(fizzbuzz);

//Exercise 13

let numArrays = [
    [100,5,23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];

let numList = numArrays[numArrays.length - 1];

console.log(numList);

//Exercise 14

let num = numArrays[2][1];

console.log(num);

//Exercise 15

let total = 0;

for (let i = 0; i < numArrays.length; i++) {
    for (let j = 0; j < numArrays[i].length; j++) {
        total += numArrays[i][j];
    }
}

console.log(total);