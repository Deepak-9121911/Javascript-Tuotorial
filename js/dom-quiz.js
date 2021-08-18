var myQuestions = [
  {
    question:
      "The Document Object Model (DOM) is a hierarchy that most closely resembles what object?",
    answers: {
      a: "a tower",
      b: "a spiderweb",
      c: "a tree",
      d: "a tournament bracket",
    },
    correctAnswer: "c",
  },
  {
    question: "Every node in the DOM represents what?",
    answers: {
      a: "a link",
      b: "a section",
      c: "a view",
      d: "a tournament bracket",
    },
    correctAnswer: "d",
  },
  {
    question:
      "What three relationships between nodes are key to the DOM hierarchy?",
    answers: {
      a: "parent",
      b: "child",
      c: "sibling",
      d: "cousin",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Which method selects the first matching element in the document?",
    answers: {
      a: "document.querySelectorAll()",
      b: "document.getElementsByClass()",
      c: "document.querySelector()",
      d: "document.getElementsByTagName()",
    },
    correctAnswer: "c",
  },

  {
    question:
      "What can we accomplish by modifying a DOM element's innerHTML attribute?",
    answers: {
      a: "Add child elements and content.",
      b: "Alter text content.",
      c: "Clear existing content.",
      d: "Modify parent element content.",
    },
    correctAnswer: "b",
  },
  {
    question: "What method allows us to add an attribute to a DOM element?",
    answers: {
      a: "element.getAttribute()",
      b: "element.createAttribute()",
      c: "element.setAttribute()",
      d: "element.makeAttribute()",
    },
    correctAnswer: "c",
  },
  {
    question: "Which are valid CSS property names in JavaScript?",
    answers: {
      a: "fontFamily",
      b: "background-position",
      c: "marginTop",
      d: "font-weight",
    },
    correctAnswer: "a",
  },
  {
    question: "Which command creates a new button?",
    answers: {
      a: "let button = document.new('button');",
      b: "let button = document.createElement('');",
      c: "let button = document.createElement('button');",
      d: "let button = document.makeElement('{button}');",
    },
    correctAnswer: "c",
  },
  {
    question: "Which command adds the button we just created to the DOM",
    answers: {
      a: "document.body.appendChild(button);",
      b: "document.insert(button);",
      c: "window.appendChild(button);",
      d: "document.insertBefore(button);",
    },
    correctAnswer: "a",
  },
  {
    question:
      "What prefix indicates that an HTML attribute is intended to store information for computing?",
    answers: {
      a: "info-",
      b: "db-",
      c: "data-",
      d: "query-",
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
    window.location.replace("dom-quiz-answer.html");
  };
}

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});
