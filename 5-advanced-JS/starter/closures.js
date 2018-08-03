/*
function retirement(retirementAge) {
  return function(yearOfBirth) {
    var a = ' years until retirement. ';
    var age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
retirementUS(1990); //40

retirement(66)(1990); //40
*/

function interviewQue(job) {
  return function(name) {
    var a = ' , can u please explain what UX design is?';
    var b = ', what subject do you teach?';
    if (job === 'designer') {
      console.log(name + a);
    } else if (job === 'teacher') {
      console.log(name + b);
    } else {
      console.log('Hello ' + name + '! What do you do?');
    }
  }
}

interviewDes = interviewQue('teacher');
interviewDes('karcys');

//interviewQue('designer')('Karka');