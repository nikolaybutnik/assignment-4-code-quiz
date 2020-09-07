//Create an array holding objects containing questions and answers
//Scramble the order of the array
//Use a for loops to display the question and a list of possible answers on the screen
//Create event listeners for each possible answer
//Create a countdown timer using setInterval() to update the variable holding the timer every second
//Deduct 2 seconds from the timer if wrong answer is selected
//Create a variable for keeping score, and increase by 1 with each correct answer
//Create a while loop that continues to execute while the timer is > 0
//Once countdown has finished, get the score variable, ask the user for initials, and store the results in local storage
//Create a way to view highscores (read results from local storage)

//Get HTML elements
let timer = document.getElementById("timer");
let question = document.getElementById("question");
let answers = document.getElementById("answers");

// Define an array that contains a list of objects containing questions, possible answers, and a correct answer.
let quizArr = [
  {
    question:
      "What is the name of an element that allows a user to provide input in the form of text?",
    answerList: {
      a: "Alert box",
      b: "Logical operator",
      c: "Prompt box",
      d: "Window object",
    },
    rightAnswer: "c",
  },

  {
    question:
      "What is the name of a tool that allows the execution of a block of code continously, as long as a condition is met?",
    answerList: {
      a: "Array",
      b: "While loop",
      c: "Conditional operator",
      d: "Boolean",
    },
    rightAnswer: "b",
  },

  {
    question: "What does DOM stand for?",
    answerList: {
      a: "Document object model",
      b: "Data operations manual",
      c: "Database operation management",
      d: "Data object model",
    },
    rightAnswer: "a",
  },

  {
    question:
      "Which console command is used to output a message to a web console?",
    answerList: {
      a: "console.dir",
      b: "console.debug",
      c: "console.log",
      d: "console.group",
    },
    rightAnswer: "c",
  },

  {
    question: "What IS THE || operator?",
    answerList: {
      a: "AND operator",
      b: "OR operator",
      c: "NOT operator",
      d: "There is no such operator",
    },
    rightAnswer: "b",
  },

  {
    question:
      "Which CSS property creates space around content, inside any defined borders?",
    answerList: {
      a: "Border",
      b: "Margin",
      c: "Display",
      d: "Padding",
    },
    rightAnswer: "d",
  },

  {
    question:
      "What is the name of a design approach that ensures web content looks good on all devices?",
    answerList: {
      a: "Responsive web design",
      b: "Reactive web design",
      c: "Sensible web design",
      d: "Flexible web design",
    },
    rightAnswer: "a",
  },

  {
    question: "Which is NOT an element of the CSS box model?",
    answerList: {
      a: "Margin",
      b: "Content",
      c: "Background",
      d: "Border",
    },
    rightAnswer: "c",
  },

  {
    question:
      "What is the name of a CSS property that allows text and inline elements to wrap around a piece of content?",
    answerList: {
      a: "Clear",
      b: "Overflow",
      c: "Clip",
      d: "Float",
    },
    rightAnswer: "d",
  },

  {
    question:
      "What is the selector used to style an element with a specified id?",
    answerList: {
      a: ".",
      b: "#",
      c: "*",
      d: "p",
    },
    rightAnswer: "b",
  },

  {
    question: "Which one of these HTML tags does NOTneed a closing tag?",
    answerList: {
      a: "img",
      b: "div",
      c: "h1",
      d: "ul",
    },
    rightAnswer: "a",
  },

  {
    question: "What does HT in HTML stand for?",
    answerList: {
      a: "Hyperlink",
      b: "Hypermedia",
      c: "Hypertext",
      d: "Hyperbole",
    },
    rightAnswer: "c",
  },

  {
    question: "Where in an HTML document is metadata placed? ",
    answerList: {
      a: "Body",
      b: "Footer",
      c: "Html",
      d: "Head",
    },
    rightAnswer: "d",
  },

  {
    question: "What is the current version of HTML?",
    answerList: {
      a: "3",
      b: "5",
      c: "2",
      d: "7",
    },
    rightAnswer: "b",
  },

  {
    question:
      "Where in an HTML document is everything visible to the user positioned",
    answerList: {
      a: "Head",
      b: "Doctype",
      c: "Body",
      d: "Html",
    },
    rightAnswer: "c",
  },
];

// Define a variable that keeps count of remaining time. Deduct 1 every second, overwriting the variable each time.
let countdown = 90;
setInterval(function () {
  countdown -= 1;
  timer.textContent = `${countdown} seconds left`;
}, 1000);

//Shuffle the quizArr to scramble the order of questions
let shuffledQuizArr = [];
for (let i = 0; i < quizArr.length; i++) {
  let randNum = Math.floor(Math.random() * quizArr.length);
  shuffledQuizArr.push(quizArr[randNum]);
}
console.log(shuffledQuizArr);

// Display first question and related answers on the screen
let currentQuestion = 0;
// Current question
question.textContent = shuffledQuizArr[currentQuestion].question;
// Current answers
function showQuiz() {
  indexCounter = 0;
  for (let i = 0; i < 4; i++) {
    answerIndex = [
      shuffledQuizArr[currentQuestion].answerList.a,
      shuffledQuizArr[currentQuestion].answerList.b,
      shuffledQuizArr[currentQuestion].answerList.c,
      shuffledQuizArr[currentQuestion].answerList.d,
    ];
    newDiv = document.createElement("div");
    newDiv.textContent = answerIndex[indexCounter];
    answers.appendChild(newDiv);
    indexCounter++;
  }
}

showQuiz();
