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

/*
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
*/



//if / else statements
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married')
    console.log(firstName + ' is married');
else
    console.log(firstName + ' will hopefully marry soon :)');


var age = 16;

if (age < 13)
    console.log(firstName + ' is a boy.');
else if(age >= 13 && age < 20)
  console.log(firstName + " is a young man.");
else
  console.log(firstName + ' is a man.');



// coding challenge 2

var averageTeam1 = (150 + 94 + 123) / 3; //110
var averageTeam2 = (97 + 134 + 105) / 3; //111
var averageTeam3 = (97 + 134 + 105) / 3; //112

console.log(averageTeam1, averageTeam2);

if (averageTeam1 > averageTeam2 && averageTeam1 > averageTeam3) {
  console.log('John\`s team wins! Average score is: ' + averageTeam1);
} else if (averageTeam1 < averageTeam2 && averageTeam3 < averageTeam2) {
  console.log('Mike\`s team wins! Average score is: ' + averageTeam2);
} else if (averageTeam1 < averageTeam3 && averageTeam2 < averageTeam3) {
  console.log('Mary\`s team wins! Average score is: ' + averageTeam3);
} else if (averageTeam1 === averageTeam3) {
  console.log('There is a draw between team 1 and team 3' + averageTeam1 + ':' + averageTeam3);
} else if (averageTeam2 === averageTeam3) {
  console.log('There is a draw between team 2 and team 3' + averageTeam2 + ':' + averageTeam3);
} else {
  console.log('There is a draw! Scores: ' + averageTeam1 + ':' + averageTeam2);
}
*/


// function

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

console.log(calculateAge(1990));

//function declaration
function whatDoYouDo(job, firstName) {}


//function expression
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' is a teacher.';
    case 'driver':
      return firstName + ' is a driver';
    default:
      return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));