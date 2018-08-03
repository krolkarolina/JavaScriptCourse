(function() {
  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i=0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    };
  };

  Question.prototype.checkAnswers = function(ans) {
    if (ans === this.correctAnswer) {
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer. Try again.');
    };
  };

  var que1 = new Question('What animal is the Doge?', ['cat','hamster','dog'], 2);
  var que2 = new Question('What name have a Flinstone(the husband)?', ['Barney','Fred','Bam Bam'], 1);
  var que3 = new Question('What is the real name of Natalie Portman?', ['Neta-Lee Hershlag', 'Destiny Hope Cyrus', 'Naren Lucille Hale'], 0);

  var questions = [que1, que2, que3];
  

  function nextQuestion() {
    var randomQuestion = Math.floor(Math.random() * questions.length);
    questions[randomQuestion].displayQuestion();

    var answer = prompt('Please select the correct answer. Type "exit" to quit');

    if(answer !== 'exit') {
      questions[randomQuestion].checkAnswers(parseInt(answer));
      nextQuestion();
    } else {
      console.log('Thanks for playing! :)');
    };
  };


  nextQuestion();

})();