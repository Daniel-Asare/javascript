const friends = ["Benjamin","Kudus","Blankson","Abena",25,undefined,null];


let bestFriend = friends[3];
friends[3] = "Suzy";

console.log(`My bestfriend is ${bestFriend}.`);

console.log(friends[3]);

// Array Challenge

const fruits = ["Orange","Mango","Avocado","Pineaple",23];

let firstFruit = fruits[0];

fruits[fruits.length - 1] = firstFruit;

console.log(firstFruit);

console.log(fruits);