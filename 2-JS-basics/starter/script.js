/*
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

//comment
/*
multiple line comment



alert(firstName + ' is a ' + age + ' year old.');
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

console.log(typeof firstName);
*/

// ternary operator and switch statement
/*
age >= 16 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

var job = 'teacher';

switch(job) {
  case 'teacher':
    console.log(firstName + ' is a teacher.');
    break;
  case 'driver':
    console.log(firstName + ' is a driver.');
    break;
  default:
    console.log(firstName + ' does something else.');
    break;
}
*/



//coding challenge 1
//count BMI


var massJohn = 70;
var massMark = 100;

var heightJohn = 1.78;
var heightMark = 1.85;

var bmiMark = massMark/(heightMark * heightMark);
var bmiJohn = massJohn/(heightJohn*heightJohn);

console.log("John BMI " + bmiJohn);
console.log("Mark BMI " + bmiMark);

var isMarkBMIHigherThanJohn = bmiMark > bmiJohn;
console.log("Is Mark\'s BMI higher than John\'s? " + isMarkBmiHigherThanJohn)
