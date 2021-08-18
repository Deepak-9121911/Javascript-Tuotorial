var myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
    },
    correctAnswer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
  },
  {
    question:
      "What is the HTML tag under which one can write the JavaScript code?",
    answers: {
      a: "&lt;src>",
      b: "&lt;java>",
      c: "&lt;JS>",
      d: "&lt;script>",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following is the correct syntax to display 'IIIT-Bh' in an alert box using JavaScript?",
    answers: {
      a: "alertbox('IIIT-Bh');",
      b: "msg('IIIT-Bh')",
      c: "msgbox('IIIT-Bh')",
      d: "alert('IIIT-Bh')",
    },
    correctAnswer: "d",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'app.js'?",
    answers: {
      a: "&lt;script src='app.js'>",
      b: "&lt;script href='app.js'>",
      c: "&lt;script ref='app.js'>",
      d: "&lt;script name='app.js'>",
    },
    correctAnswer: "a",
  },
  {
    question:
      "The external JavaScript file must contain &lt;script> tag. True or False?",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: "b",
  },
  {
    question: "How can you get the type of arguments passed to a function?",
    answers: {
      a: "using typeof operator",
      b: "using getType function",
      c: "Both of the above.",
      d: "None of the above.",
    },
    correctAnswer: "a",
  },
  {
    question: "Which of the following is correct about callbacks?",
    answers: {
      a:
        "A callback is a plain JavaScript function passed to some method as an argument or option.",
      b:
        "Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.",
      c: "Both of the above.",
      d: "None of the above.",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Which of the following function of Number object returns a string value version of the current number?",
    answers: {
      a: "toString()",
      b: "toFixed()",
      c: "toLocaleString()",
      d: "toPrecision()",
    },
    correctAnswer: "a",
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
    resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };

  //on clicking the view results button
  answerButton.onclick = () => {
    window.location.replace("dom-quiz-answer.html");
  };
}

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});
