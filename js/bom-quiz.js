var myQuestions = [
  {
    question: "The word 'document' mainly refers to ______",
    answers: {
      a: "Dynamic Information",
      b: "Static Information",
      c: "Both Dynamic and Static Information",
      d: "Temporary information",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Which identifier is used to represent a web browser window or frame?",
    answers: {
      a: "frames",
      b: "window",
      c: "location",
      d: "frame",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Which property in the Window object is used to refer to a Location object?",
    answers: {
      a: "position",
      b: "area",
      c: "window",
      d: "location",
    },
    correctAnswer: "d",
  },
  {
    question: "The setTimeout() method is used to _____",
    answers: {
      a: "Make the event sleep",
      b: "Register a function to be invoked after a certain time",
      c: "Invoke an event after a certain time",
      d: "Time for iteration",
    },
    correctAnswer: "b",
  },

  {
    question:
      "Which Window object method is used to display a message in a dialog box?",
    answers: {
      a: "prompt()",
      b: "alert()",
      c: "message()",
      d: "console.log",
    },
    correctAnswer: "b",
  },
  {
    question: "When will the window property come into play?",
    answers: {
      a: "Representation convenience",
      b: "Use as an extension of other objects",
      c: "Use objects in the Window object",
      d: "Refer to window object itself",
    },
    correctAnswer: "d",
  },
  {
    question: "Which of the following is a global object?",
    answers: {
      a: "Register",
      b: "Location",
      c: "Window",
      d: "Position",
    },
    correctAnswer: "c",
  },
  {
    question:
      "How to pick a document element based on the value of its id attribute?",
    answers: {
      a: "getElementsbyId()",
      b: "getElementbyId()",
      c: "both getElementsbyId() and getElementbyId()",
      d: "getElement",
    },
    correctAnswer: "b",
  },
  {
    question:
      "_________ displays a model dialog box containing HTML formatted content and allows arguments to be passed to, and a value returned from, the dialog.",
    answers: {
      a: "alert()",
      b: "conform()",
      c: "prompt()",
      d: "showModelDialog()",
    },
    correctAnswer: "d",
  },
  {
    question:
      "i) Like setTimeout(), setInterval() returns a value that can be passed to clearInterval() to cancel any future invocations of the scheduled function.<br>ii) If you call setTimeout() with a time of 0ms, the function you specify is not invoked right way.",
    answers: {
      a: "i-True, ii-False",
      b: "i-False,ii-True",
      c: "i-True, ii-True",
      d: "i-False, ii-False",
    },
    correctAnswer: "c",
  },
];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var answerButton = document.getElementById("answers");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for (var i = 0; i < questions.length; i++) {
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for (letter in questions[i].answers) {
        // ...add an html radio button
        answers.push(
          "<label>" +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            " " +
            letter +
            ": " +
            questions[i].answers[letter] +
            "</label>",
          "<br />"
        );
      }

      var qno = i + 1;
      // add this question and its answers to the output
      output.push(
        '<div class="question">' +
          qno +
          ". " +
          questions[i].question +
          "</div>" +
          '<div class="answers">' +
          answers.join("") +
          "</div>"
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    var userAnswer = "";
    var numCorrect = 0;

    // for each question...
    for (var i = 0; i < questions.length; i++) {
      // find selected answer
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      // if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[i].style.color = "green";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[i].style.color = "red";
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML =
      "You scored " + numCorrect + " out of " + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };

  //on clicking the view results button
  answerButton.onclick = () => {
    window.location.replace("bom-quiz-answer.html");
  };
}

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});
