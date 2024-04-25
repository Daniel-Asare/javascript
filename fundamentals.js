/*

//Datatypes
true;
let javascriptIsFun =  true;

console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Daniel');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

// let var const
let age = 30;
age = 31;

// const birthYear = 1991;
// birthYear = 1990;

var job = 'programmer';
job = 'teacher';
console.log(job);

// Basic  Math Operators
const year = 2024;
const ageDaniel = year - 1996 ;
const ageKudus = year - 1994 ;
console.log(ageDaniel, ageKudus);

console.log(ageDaniel * 2, ageKudus / 10, 2 ** 3);

const firstName = 'Daniel';
const lastName = 'Asare';
console.log(firstName +  ' ' +lastName );

//Assigment Operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x  - 1

console.log(x);

// comparison operators
console.log(ageDaniel > ageKudus);
console.log(ageDaniel >= 18);

const isFullAge = ageDaniel >= 18;

console.log((year - 1991) > (year - 2020));

const now = 2024;
const ageDaniel = now - 1996;
const ageKudus = now - 1998;

// String template  litrals

const firstName = 'Daniel';
const job = 'teacher';
const birthYear = 1996;
const year = 2024;

const daniel = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;

console.log(daniel); 

// if else statement
const age = 16;

if (age >= 18){
  console.log("Daniel can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Daniel is too young, wait another ${yearsLeft}years`);
 }

 const birthYear = 1996;
 let century;
 if(birthYear <= 2000){
   century = 20;
  } else {
    century = 21
  }
  
  console.log(century);
  
  // type conversion 
  
  const inputYear = '1996';
  console.log(Number(inputYear), inputYear);
  console.log(Number(inputYear) + 18);

  console.log(Number('Daniel'));
  console.log(typeof NaN);
  
  console.log(String(23), 23);
  
  // Type coercion
  console.log('I am ' + 23 + 'years old');
  console.log('23' - '10' - 5);
  console.log('23' / '2');
  
  let n = '1' + 1;
  n -= 1;
  console.log(n);
  
  // 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Daniel'));
console.log(Boolean(''));
console.log(Boolean({}));

const money = 0;

if (money){
  console.log('Dont spend it all');
} else {
  console.log('You should get a job');
}

let height;
if (height){
  console.log('Yay!, Height is defined');
} else {
  console.log(' Height is UNDEFINED');
}


// Boolean Logic

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive){
//   console.log('Sarah is able to drive');
// }else{
//   console.log('Someonelse should drive...');
// }

const isTired = false; 
console.log(hasDriversLicense || hasGoodVision || isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
  console.log();
}

// Switch statement

const day = 'wednesday';


switch(day){
 case 'monday':
  console.log('Plan course structure');
  console.log('Go to coding meetups');
  break;
  
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break
    case 'friday':
      console.log('Record videos');
      break;

  case 'saturday':
  case'sunday':
    console.log('Enjoy the weekends!');
    break;
    
    default:
      console.log('Not a valid day');
    break;
}
*/

// Ternary Operators

const age = 27;
age >= 18 ? console.log('I like to drink wine'):console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

