'use strict';
/*
function logger(){
  console.log('My name is Daniel');
}
logger();
logger();
logger();

function fruitProcessor(apples,orange){
  console.log(apples,orange);
  const juice = `Juice with ${apples} apples and ${orange} oranges.`;
  return juice;
}

document.body.innerHTML = fruitProcessor(5,0)
const appleJuice =fruitProcessor(5,0);
console.log(appleJuice);

console.log(calcAge(1996,2024))

function calcAge(birthYear,currentYear){
  const age = currentYear - birthYear
  return age;
}


const age = function(birthYear){
  return 2037 - birthYear;
}
console.log(age(2000));

// arrow function
const calcAge = birthYear => 2027 - birthYear;
const age3 = calcAge(1991)
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) =>{
  const age = 2027 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1990,'Daniel'));
*/

function cutFruitPieces(fruit){
  return fruit * 4;
}

function fruitProcessor(apples,orange){
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(orange);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2,3));