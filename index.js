const Kahoot = require("kahoot.js-updated");
const client = new Kahoot();

// Join the game with the pin number and your name
client.join('06443935', Math.random()+" - Kaitlyn");

// Called when the quiz starts
client.on("QuizStart", () => {
  console.log("The quiz has started");
});

// Called when the quiz ends
client.on("QuizEnd", () => {
  console.log("The quiz has ended");
});

// Called when a new question is asked by Kahoot
client.on("QuestionStart", question => {

  // Print the question to the console
  console.log("----\nQuestion #" + (question.questionIndex+1));
  console.log(question);

  // --- PART 1 ---
  // Answer A for each question
  // var answer = 0;

  // --- PART 2 ---
  // Choose a random answer for each question
  // var answer = Math.floor( Math.random() * question.choices.length );

  // --- PART 3 ---
  // Find the answer using a loop to check if each choice is correct
  var answer = 0;
  question.choices.forEach(function(value, i) {
    if(value.correct) {
      answer = i;
    }
  })

  // The program will send the API its answer
  question.answer(answer);
  console.log("You answered: " + question.choices[answer].answer);

});