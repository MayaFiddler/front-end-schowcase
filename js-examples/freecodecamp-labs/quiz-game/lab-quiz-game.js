

/**
 * Quiz Engine – Core Logic
 *
 * Provides utility functions for:
 * - Random question selection
 * - Random answer selection
 * - Answer evaluation
 *
 * Designed to be reusable and independent from any UI implementation.
 */


const questions = [
  {
    category: "fun",
    question: "Have you got a bear?",
    choices: ["yes", "no", "maybe"],
    answer: "no"
  },
  {
    category: "real",
    question: "Is the world round?",
    choices: ["yes", "no", "maybe"],
    answer: "yes"
  },
  {
    category: "fun",
    question: "Is the Dubai ice cream green?",
    choices: ["yes", "no", "maybe"],
    answer: "no"
  },
  {
    category: "real",
    question: "Is France in Europe?",
    choices: ["yes", "no", "maybe"],
    answer: "yes"
  },
  {
    category: "fun",
    question: "Do unicorns exist?",
    choices: ["yes", "no", "maybe"],
    answer: "no"
  }
];

// Function to get a random question object
function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Function to get a random choice from a question's choices
function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to check if the computer's answer is correct
function getResults(questionObj, computerChoice) {
  if (questionObj.answer === computerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  };
}

/* DEMO USAGE */
const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices); 
const result = getResults(randomQuestion, computerChoice);

console.log("Question:", randomQuestion.question);
console.log("Computer's Choice:", computerChoice);
console.log(result);
/** * Expected output (example):
 * Question: Is the world round?
 * Computer's Choice: maybe
 * The computer's choice is wrong. The correct answer is: yes
 */




