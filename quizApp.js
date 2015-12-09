//We're going to create the JS for a basic quiz application.

//Let's think about the nature of this quiz app first. We're going to be creating
//lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two
//perfectly good constructors.

//Create a QuizUser constructor that accepts name, email, password, and totalScore
//parameters and set them appropriatly

var QuizUser = function(name, email, password, totalScore) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.totalScore =totalScore;
}


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

var Question = function (title, answersArray, rightAnswer, difficulty) {
  this.title = title;
  this.answersArray = answersArray;
  this.rightAnswer = rightAnswer;
  this.difficulty = difficulty;

}


//Create a quizUsers Array which is going to hold all of our users.

var quizUsers = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

var tyler = new QuizUser ('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS', 10);

var cahlan = new QuizUser ('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags', 9 );

var lenny = new QuizUser ('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup', 8);

quizUsers.push(tyler); quizUsers.push(cahlan); quizUsers.push(lenny);


//Create a questions Array which is going to hold all of our questions

var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain
//the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.
//var Question = function (title, answersArray, rightAnswer, difficulty)

var question1= new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?', '1,2,3', 'rightAnswer', 'easy');
var question2= new Question('T/F: JavaScript is just a scripting version of Java', '1,2,3', 'rightAnswer', 'easy');
var question3= new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", '1,2,3', 'rightAnswer', 'easy');

questions.push(question1); questions.push(question2); questions.push(question3);



console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that
//they're both holding the right data.

  //code here
