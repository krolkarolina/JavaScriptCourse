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
/*
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
*/

//arrays
/*
var names = ['John', 'Karo', 'Mati'];
var years = new Array(1990,1991,1992);

console.log(names);
console.log(names.length);

names[1] = 'Ben';
console.log(names);

names.push('Kara'); //push to last place in array
names.unshift('Ola'); //push to first place in array
console.log(names);

names.pop(); //removes one element from the end of array
names.shift(); //removes first element from array
console.log(names);

console.log(names.indexOf('John'));
console.log(names);

var isMati = names.indexOf('Karo') === -1 ? 'It\`s not a Mati' : 'It is a Mati!';
console.log(isMati);
*/


//coding challenge 3
/*
var bills = [124, 48, 268];
var summOfPayment = [];

var tipCalculator = function(amount) {
  if ( amount < 50) {
    var tip = amount * 0.2;
  } else if (50 <= amount && amount <= 200 ) {
    tip = amount * 0.15;
  } else {
    tip = amount * 0.1;
  }

  return tip;
}

var summ = function(tip, bill) {
  var summary = tip + bill;
  return summary;
}

for(var i=0; i<bills.length; i++) {
  summOfPayment[i] = summ(tipCalculator(bills[i]), bills[i]);
}

console.log(summOfPayment);
*/

//Objects and properties
//new object syntax
/*
var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane['isMarried'] = true;

console.log(jane);

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    var year = new Date().getFullYear();
    this.age = year - this.birthYear;
  }
}

//console.log(john.calcAge(1990));
john.calcAge();
console.log(john);


var x = 'birthYear';
console.log(john.firstName);
console.log(john['lastName']);
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
*/

//coding challenge 4
/*
var countBMI = {
  BMI: function() {
    return this.BMI = this.mass / (this.height * this.height);
  }
}

var Mark = {
  firstName: 'Mark',
  lastName: 'Smith',
  mass: 78,
  height: 1.69
}

countBMI.BMI.call(Mark);

var John = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 78,
  height: 1.69
}

countBMI.BMI.call(John);

var higherBMI = function(firstPerson, secondPerson) {
  if (firstPerson.BMI < secondPerson.BMI) {
    console.log(firstPerson.firstName + ' has lower BMI(' + firstPerson.BMI + ') than ' + secondPerson.firstName + '(' + secondPerson.BMI + ').');
  } else if (firstPerson.BMI > secondPerson.BMI){
    console.log(firstPerson.firstName + ' has higher BMI(' + firstPerson.BMI + ') than ' + secondPerson.firstName + '(' + secondPerson.BMI + ').');
  } else {
    console.log('Both have the same BMI: ' + firstPerson.BMI + ' and ' + secondPerson.BMI);
  }
}
higherBMI(Mark, John);

*/
// coding challange 5
//John
var johnTipCalc = {
  billsValues: [124, 48, 268, 180, 42],
  tip: [],
  summOfPayment: [],
  percent: function() {
    for (var i=0; i < this.billsValues.length; i++) {
      if (this.billsValues[i] < 50) {
        this.tip[i] = this.billsValues[i] * 0.2; 
      }  else if (this.billsValues[i] <= 50 && this.billsValues[i] <= 200) {
        this.tip[i] = this.billsValues[i] * 0.15;
      } else {
        this.tip[i] = this.billsValues[i] * 0.1;
      }
    }
    return this.tip;
  },
  calcSumm: function() {
    for (var j=0; j < this.tip.length; j++)
    this.summOfPayment[j] = (this.tip[j] + this.billsValues[j]);
    console.log("Summ of payment: " + this.summOfPayment);
  }
}

console.log(johnTipCalc.percent());
johnTipCalc.calcSumm();
 

 //Mark

var markTipCalc = {
  billsValues: [77, 375, 110, 45],
  tip: [],
  summOfPayment: [],
  percent: function() {
    for (var i=0; i < this.billsValues.length; i++) {
      if (this.billsValues[i] < 100) {
        this.tip[i] = this.billsValues[i] * 0.2; 
      }  else if (this.billsValues[i] <= 100 && this.billsValues[i] <= 300) {
        this.tip[i] = this.billsValues[i] * 0.1;
      } else {
        this.tip[i] = this.billsValues[i] * 0.25;
      }
    }
    return this.tip;
  }
}
markTipCalc.percent();
johnTipCalc.calcSumm.call(markTipCalc);
console.log(markTipCalc.tip);


//average payment for each of them

var average = function(person) {
  for( var i=0; i< person.tip.length; i++) {
    var summary = 0;
    summary += person.tip[i];
    var averageSummary = (summary / person.tip.length);
  }
  return averageSummary;
}

console.log("Average tip payment for John: " + average(johnTipCalc) + " and average tip payment for Mark: " + average(markTipCalc));
if (average(johnTipCalc) < average(markTipCalc)) {
  console.log('Mark\`s family paid average more tips than John\`s family.')  
} else if (average(johnTipCalc) > average(markTipCalc)) {
  console.log('John\`s family paid average more tips than Mark\`s family.')
} else {
  console.log("Both families paid same average amount of tips." + average(johnTipCalc) + ":" + average(markTipCalc));
}

