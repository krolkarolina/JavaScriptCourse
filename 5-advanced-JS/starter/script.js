//function constructor
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  var year = new Date().getFullYear();
  console.log(year - this.yearOfBirth);
}

//instance of the person object
var john = new Person('Kara', 1990, 'none');
john.calculateAge();