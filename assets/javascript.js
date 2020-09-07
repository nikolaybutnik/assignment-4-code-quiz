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

// Get HTML elements
let timer = document.getElementById("timer");
let question = document.getElementById("question");
let answers = document.getElementById("answers");
let answerBtn = document.getElementsByClassName("button");
let beginBtn = document.getElementById("beginBtn");
let scoreEl = document.getElementById("score");
let optionA = document.getElementById("a");
let optionB = document.getElementById("b");
let optionC = document.getElementById("c");
let optionD = document.getElementById("d");
let info = document.getElementById("info");

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
    question: "What is the || operator?",
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
    question: "Which one of these HTML tags does NOT need a closing tag?",
    answerList: {
      a: "img",
      b: "div",
      c: "h1",
      d: "ul",
    },
    rightAnswer: "a",
  },

  {
    question: "What does H in HTML stand for?",
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

// Define a variable that keeps score
let score = 0;

// Define a function that keeps count of remaining time. When countdown reaches 0, clear the screen
let countdown = 60;
function countdownTimer() {
  let timerInterval = setInterval(function () {
    countdown--;
    timer.textContent = `${countdown} seconds left`;
    if (countdown === 0) {
      clearInterval(timerInterval);
      question.textContent = "";
      optionA.textContent = "";
      optionB.textContent = "";
      optionC.textContent = "";
      optionD.textContent = "";
      userInitials = prompt("Game over! Enter your initials: ");
      timer.textContent = `Thanks for playing! You scored ${score} points. Your highscore havs been registered under ${userInitials}.`;
    }
  }, 1000);
}

//Shuffle the quizArr to scramble the order of questions
let shuffledQuizArr = quizArr.sort(() => Math.random() - 0.5);
// Credit: https://flaviocopes.com/how-to-shuffle-array-javascript/

console.log(shuffledQuizArr);

// Define a counter to set question order
let currentQuestion = 0;

// Define a function that uses the currentQuestion counter to display the appropriate question and set of answers on the screen
function showQuiz() {
  // Display the question
  question.textContent = shuffledQuizArr[currentQuestion].question;
  // Display the answers
  optionA.textContent = shuffledQuizArr[currentQuestion].answerList.a;
  optionB.textContent = shuffledQuizArr[currentQuestion].answerList.b;
  optionC.textContent = shuffledQuizArr[currentQuestion].answerList.c;
  optionD.textContent = shuffledQuizArr[currentQuestion].answerList.d;
}

// Add event listener to the main button to begin the quiz
beginBtn.addEventListener("click", beginQuiz);

function beginQuiz() {
  countdownTimer();
  showQuiz();
}

// Loop through all button class elements and add even liteners to all
for (i = 0; i < answerBtn.length; i++) {
  let btn = answerBtn[i];
  btn.addEventListener("click", function () {
    // If right answer matches the id of the clicked element...
    if (shuffledQuizArr[currentQuestion].rightAnswer === event.target.id) {
      let lineBr = document.createElement("HR");
      // Insert line break and infrom the user of correct answer
      answers.appendChild(lineBr);
      info.textContent = "Correct!";
      // Remove the info after 1 second
      setTimeout(function () {
        lineBr.remove();
        info.textContent = "";
      }, 1000);
      // Add 1 to currentQuestion counter to move on t onext question once showQuiz function fires again
      currentQuestion += 1;
      // Add 1 to score and display the new score
      score += 1;
      scoreEl.textContent = score;
      // Show next question
      showQuiz();
    } else {
      let lineBr = document.createElement("HR");
      // Deduct 5 seconds for a wrong answer
      countdown -= 5;
      // Insert line break and infrom the user of wrong answer and time penalty
      answers.appendChild(lineBr);
      info.textContent = "Wrong, minus 5 seconds!";
      // Remove the info after 1 second
      setTimeout(function () {
        lineBr.remove();
        info.textContent = "";
      }, 1000);
      if (countdown <= 0) {
        question.textContent = "";
        optionA.textContent = "";
        optionB.textContent = "";
        optionC.textContent = "";
        optionD.textContent = "";
        timer.remove();
        userInitials = prompt("Game over! Enter your initials: ");
        let newDiv = document.createElement("div");
        newDiv.textContent = `Thanks for playing! You scored ${score} points. Your highscore havs been registered under ${userInitials}.`;
        answers.appendChild(newDiv);
      } else {
        // Add 1 to currentQuestion counter to move on t onext question once showQuiz function fires again
        currentQuestion += 1;
        // Show next question
        showQuiz();
      }
    }
  });
}
