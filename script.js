"use strict";

// =====================================
// THE ACADEMY OF WONDERS
// 1. WORLDS DATA
// =====================================

const STORAGE_KEY = "academyOfWondersProgress";

const worlds = {
technology: {
title: "World of Technology",
description: "Explore computers, programming and artificial intelligence.",

lessons: [
  {
    id: "tech1",
    title: "Introduction to Computers",
    description: "Discover the basic parts of a computer.",
    content: `
      <h3>What is a Computer?</h3>
      <p>A computer is an electronic device that receives data, processes it, stores it and produces information.</p>

      <h3>Main Components</h3>
      <ul>
        <li><strong>CPU:</strong> Processes instructions.</li>
        <li><strong>RAM:</strong> Temporarily stores working data.</li>
        <li><strong>Storage:</strong> Keeps files and programs.</li>
        <li><strong>Input:</strong> Keyboard and mouse.</li>
        <li><strong>Output:</strong> Monitor and speakers.</li>
      </ul>
    `
  },
  {
    id: "tech2",
    title: "Programming Basics",
    description: "Discover how computers follow instructions.",
    content: `
      <h3>What is Programming?</h3>
      <p>Programming means writing instructions that tell a computer what to do.</p>

      <h3>Important Concepts</h3>
      <ul>
        <li><strong>Variable:</strong> Stores a value.</li>
        <li><strong>Condition:</strong> Helps a program make decisions.</li>
        <li><strong>Loop:</strong> Repeats instructions.</li>
        <li><strong>Function:</strong> A reusable group of instructions.</li>
      </ul>
    `
  },
  {
    id: "tech3",
    title: "Artificial Intelligence",
    description: "Understand the basics of AI.",
    content: `
      <h3>What is AI?</h3>
      <p>Artificial Intelligence is a field of computing that creates systems able to perform tasks such as recognizing patterns and understanding language.</p>

      <h3>Examples</h3>
      <ul>
        <li>Voice assistants.</li>
        <li>Recommendation systems.</li>
        <li>Image recognition.</li>
        <li>Language tools.</li>
      </ul>
      <p>AI can make mistakes, so its results should be checked.</p>
    `
  }
],

quiz: [
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility"
    ],
    answer: 0
  },
  {
    question: "Which device is used to enter text?",
    options: ["Monitor", "Keyboard", "Speaker"],
    answer: 1
  },
  {
    question: "What is a variable?",
    options: [
      "A screen",
      "A place to store a value",
      "A printer"
    ],
    answer: 1
  }
]
},

science: {
title: "World of Science",
description: "Discover space, nature and scientific ideas.",

lessons: [
  {
    id: "sci1",
    title: "Our Solar System",
    description: "Explore the Sun and its planets.",
    content: `
      <h3>The Solar System</h3>
      <p>Our Solar System includes the Sun and the objects that travel around it.</p>

      <h3>The Eight Planets</h3>
      <ol>
        <li>Mercury</li>
        <li>Venus</li>
        <li>Earth</li>
        <li>Mars</li>
        <li>Jupiter</li>
        <li>Saturn</li>
        <li>Uranus</li>
        <li>Neptune</li>
      </ol>
      <p>The Sun is a star that provides light and heat to Earth.</p>
    `
  },
  {
    id: "sci2",
    title: "The Scientific Method",
    description: "Learn how scientists investigate questions.",
    content: `
      <h3>The Scientific Method</h3>
      <ol>
        <li>Observe a situation.</li>
        <li>Ask a question.</li>
        <li>Suggest a hypothesis.</li>
        <li>Test the idea.</li>
        <li>Analyze the results.</li>
        <li>Make a conclusion.</li>
      </ol>
      <p>Science uses evidence to investigate the world.</p>
    `
  },
  {
    id: "sci3",
    title: "Ecosystems",
    description: "Understand how living things interact.",
    content: `
      <h3>What is an Ecosystem?</h3>
      <p>An ecosystem is a community of living organisms interacting with each other and their environment.</p>

      <ul>
        <li><strong>Producers:</strong> Usually plants.</li>
        <li><strong>Consumers:</strong> Animals that eat other organisms.</li>
        <li><strong>Decomposers:</strong> Organisms that break down dead material.</li>
        <li><strong>Non-living factors:</strong> Water, air, soil and sunlight.</li>
      </ul>
    `
  }
],

quiz: [
  {
    question: "How many planets are in our Solar System?",
    options: ["Seven", "Eight", "Nine"],
    answer: 1
  },
  {
    question: "What is a hypothesis?",
    options: [
      "A testable possible explanation",
      "A planet",
      "A final score"
    ],
    answer: 0
  },
  {
    question: "Which is a producer?",
    options: ["A plant", "A lion", "A mushroom"],
    answer: 0
  }
]
},

knowledge: {
title: "World of Knowledge",
description: "Travel through history, languages and culture.",

lessons: [
  {
    id: "know1",
    title: "Discovering History",
    description: "Learn why the past matters.",
    content: `
      <h3>What is History?</h3>
      <p>History is the study of people, events and societies from the past.</p>

      <h3>Historical Sources</h3>
      <ul>
        <li>Books and documents.</li>
        <li>Ancient buildings and objects.</li>
        <li>Letters and photographs.</li>
        <li>Oral stories and memories.</li>
      </ul>
      <p>Historians study evidence to understand the past.</p>
    `
  },
  {
    id: "know2",
    title: "The Power of Languages",
    description: "Discover how languages connect people.",
    content: `
      <h3>Why are Languages Important?</h3>
      <p>Language helps people communicate, share ideas and express feelings.</p>

      <h3>Ways to Learn</h3>
      <ul>
        <li>Learn new words.</li>
        <li>Read short texts.</li>
        <li>Listen and practice speaking.</li>
        <li>Review vocabulary regularly.</li>
      </ul>
    `
  },
  {
    id: "know3",
    title: "Critical Thinking",
    description: "Learn to examine information carefully.",
    content: `
      <h3>What is Critical Thinking?</h3>
      <p>Critical thinking means examining information before deciding what to believe.</p>

      <h3>Ask Yourself</h3>
      <ul>
        <li>Who created this information?</li>
        <li>What evidence supports it?</li>
        <li>Is the source reliable?</li>
        <li>Are there other explanations?</li>
      </ul>
    `
  }
],

quiz: [
  {
    question: "What does history study?",
    options: [
      "Only the future",
      "People and events from the past",
      "Only numbers"
    ],
    answer: 1
  },
  {
    question: "Which is an archaeological source?",
    options: ["An ancient tool", "A weather forecast", "A password"],
    answer: 0
  },
  {
    question: "What helps critical thinking?",
    options: [
      "Ignoring evidence",
      "Believing every claim",
      "Checking evidence"
    ],
    answer: 2
  }
]
},

creativity: {
title: "World of Creativity",
description: "Explore art, design and creative ideas.",

lessons: [
  {
    id: "creative1",
    title: "The Language of Colors",
    description: "Discover how colors work together.",
    content: `
      <h3>Why Do Colors Matter?</h3>
      <p>Colors help communicate mood, create contrast and guide attention.</p>

      <h3>Color Groups</h3>
      <ul>
        <li><strong>Primary:</strong> Red, yellow and blue.</li>
        <li><strong>Secondary:</strong> Orange, green and purple.</li>
        <li><strong>Warm:</strong> Red, orange and yellow.</li>
        <li><strong>Cool:</strong> Blue, green and violet.</li>
      </ul>
    `
  },
  {
    id: "creative2",
    title: "Introduction to Design",
    description: "Learn basic design principles.",
    content: `
      <h3>What is Design?</h3>
      <p>Design is the process of planning how something looks and works.</p>

      <h3>Four Principles</h3>
      <ul>
        <li><strong>Contrast:</strong> Show differences clearly.</li>
        <li><strong>Alignment:</strong> Organize elements.</li>
        <li><strong>Repetition:</strong> Keep styles consistent.</li>
        <li><strong>Proximity:</strong> Keep related items together.</li>
      </ul>
    `
  },
  {
    id: "creative3",
    title: "Creative Problem Solving",
    description: "Turn ideas into useful solutions.",
    content: `
      <h3>Creative Problem Solving</h3>
      <ol>
        <li>Understand the problem.</li>
        <li>Think of different ideas.</li>
        <li>Choose an idea.</li>
        <li>Create a simple prototype.</li>
        <li>Test and improve it.</li>
      </ol>
      <p>Feedback helps us improve our ideas.</p>
    `
  }
],

quiz: [
  {
    question: "Which are traditional primary colors?",
    options: [
      "Red, yellow, blue",
      "Green, orange, purple",
      "Black, white, gray"
    ],
    answer: 0
  },
  {
    question: "Which principle organizes elements?",
    options: ["Alignment", "Randomness", "Noise"],
    answer: 0
  },
  {
    question: "What should happen after testing a prototype?",
    options: [
      "Ignore results",
      "Improve it using feedback",
      "Stop learning"
    ],
    answer: 1
  }
  ]
}
};
// =====================================
// 2. HTML ELEMENTS
// =====================================
// 2. HTML ELEMENTS

const elements = {
worldButtons: document.querySelectorAll("[data-world]"),
worldDetails: document.getElementById("worldDetails"),
worldTitle: document.getElementById("worldTitle"),
worldImage: document.getElementById("worldImage"),
worldDescription: document.getElementById("worldDescription"),
lessonsContainer: document.getElementById("lessonsContainer"),
lessonViewer: document.getElementById("lessonViewer"),
lessonTitle: document.getElementById("lessonTitle"),
lessonContent: document.getElementById("lessonContent"),
finishLessonButton: document.getElementById("finishLessonButton"),
backButton: document.getElementById("backButton"),
startQuizButton: document.getElementById("startQuizButton"),
quizSection: document.getElementById("quizSection"),
quizCounter: document.getElementById("quizCounter"),
quizQuestion: document.getElementById("quizQuestion"),
quizOptions: document.getElementById("quizOptions"),
quizFeedback: document.getElementById("quizFeedback"),
nextQuestionButton: document.getElementById("nextQuestionButton"),
quizResult: document.getElementById("quizResult"),
quizScore: document.getElementById("quizScore"),
retryQuizButton: document.getElementById("retryQuizButton"),
worldProgressFill: document.getElementById("worldProgressFill"),
worldProgressText: document.getElementById("worldProgressText"),
completedLessons: document.getElementById("completedLessons"),
completedQuizzes: document.getElementById("completedQuizzes"),
totalPoints: document.getElementById("totalPoints"),
resetProgressButton: document.getElementById("resetProgressButton")
};

// 3. APPLICATION STATE

let currentWorldKey = null;
let currentLessonId = null;
let currentQuestionIndex = 0;
let currentScore = 0;
let questionAnswered = false;

function createDefaultProgress() {
return {
completedLessons: [],
completedQuizzes: [],
totalPoints: 0
};
}

function loadProgress() {
try {
const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (!saved) return createDefaultProgress();

return {
  completedLessons: Array.isArray(saved.completedLessons)
    ? saved.completedLessons : [],
  completedQuizzes: Array.isArray(saved.completedQuizzes)
    ? saved.completedQuizzes : [],
  totalPoints: Number(saved.totalPoints) || 0
};
} catch (error) {
return createDefaultProgress();
}
}

let progress = loadProgress();

function saveProgress() {
localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
updateOverallProgress();
updateWorldProgress();
}

// 4. OPEN A WORLD

function openWorld(worldKey) {
const world = worlds[worldKey];

if (!world) return;

currentWorldKey = worldKey;
currentLessonId = null;

elements.worldTitle.textContent = world.title;
elements.worldDescription.textContent = world.description;

elements.lessonsContainer.innerHTML = "";

world.lessons.forEach(lesson => {
const card = document.createElement("article");
card.className = "lesson-card";

const title = document.createElement("h3");
title.textContent = lesson.title;

const description = document.createElement("p");
description.textContent = lesson.description;

const button = document.createElement("button");
button.className = "lesson-button";
button.dataset.lesson = lesson.id;
button.textContent = "Open Lesson";

card.append(title, description, button);
elements.lessonsContainer.appendChild(card);
});

elements.worldDetails.hidden = false;
elements.lessonViewer.hidden = true;
elements.quizSection.hidden = true;
elements.quizResult.hidden = true;

updateWorldProgress();

elements.worldDetails.scrollIntoView({
behavior: "smooth",
block: "start"
});
}

// 5. OPEN A LESSON

function openLesson(lessonId) {
if (!currentWorldKey) return;

const world = worlds[currentWorldKey];
const lesson = world.lessons.find(item => item.id === lessonId);

if (!lesson) return;

currentLessonId = lessonId;

elements.lessonTitle.textContent = lesson.title;
elements.lessonContent.innerHTML = lesson.content;

elements.lessonViewer.hidden = false;

const alreadyCompleted =
progress.completedLessons.includes(lessonId);

elements.finishLessonButton.textContent =
alreadyCompleted ? "Lesson Completed" : "Complete Lesson";

elements.
lessonViewer.scrollIntoView({
behavior: "smooth",
block: "start"
});
}

// 6. COMPLETE A LESSON

function finishLesson() {
if (!currentLessonId) return;

if (!progress.completedLessons.includes(currentLessonId)) {
progress.completedLessons.push(currentLessonId);
saveProgress();
}

elements.finishLessonButton.textContent = "Lesson Completed";
}

// 7. WORLD PROGRESS

function updateWorldProgress() {
if (!currentWorldKey) return;

const world = worlds[currentWorldKey];
const total = world.lessons.length;

const completed = world.lessons.filter(lesson =>
progress.completedLessons.includes(lesson.id)
).length;

const percentage = total === 0
? 0
: Math.round((completed / total) * 100);

elements.worldProgressFill.style.width = percentage + "%";

elements.worldProgressText.textContent =
elements.worldProgressText.textContent =
    completed + " of " + total + " lessons completed (" + percentage + "%)";
}

// 8. OVERALL PROGRESS

function updateOverallProgress() {
elements.completedLessons.textContent =
progress.completedLessons.length;

elements.completedQuizzes.textContent =
progress.completedQuizzes.length;

elements.totalPoints.textContent =
progress.totalPoints;
}

// 9. QUIZ FUNCTIONS

function getCurrentQuiz() {
if (!currentWorldKey) return [];

const world = worlds[currentWorldKey];

return world.quiz || [];
}

function startQuiz() {
if (!currentWorldKey) return;

const quiz = getCurrentQuiz();

if (!quiz.length) return;

currentQuestionIndex = 0;
currentScore = 0;
questionAnswered = false;

elements.quizSection.hidden = false;
elements.quizResult.hidden = true;
elements.nextQuestionButton.hidden = true;

showQuestion();

elements.quizSection.scrollIntoView({
behavior: "smooth",
block: "start"
});
}

function showQuestion() {
const quiz = getCurrentQuiz();
const question = quiz[currentQuestionIndex];

if (!question) return;

questionAnswered = false;

elements.quizCounter.textContent =
    "Question " + (currentQuestionIndex + 1) + " of " + quiz.length;


elements.quizQuestion.textContent = question.question;
elements.quizFeedback.textContent = "";
elements.quizOptions.innerHTML = "";

elements.nextQuestionButton.hidden = true;

question.options.forEach((option, index) => {
const button = document.createElement("button");

button.type = "button";
button.dataset.answer = index;
button.textContent = option;

elements.quizOptions.appendChild(button);
});
}

function chooseAnswer(answerIndex) {
if (questionAnswered) return;

const quiz = getCurrentQuiz();
const question = quiz[currentQuestionIndex];

if (!question) return;

questionAnswered = true;

const isCorrect = Number(question.answer) === answerIndex;

if (isCorrect) {
currentScore++;
elements.quizFeedback.textContent = "Correct! Well done.";
} else {
elements.quizFeedback.textContent = "Not quite! Try the next question.";
}

const buttons = elements.quizOptions.querySelectorAll("button");

buttons.forEach(button => {
button.disabled = true;
});

elements.nextQuestionButton.hidden = false;

elements.nextQuestionButton.textContent =
currentQuestionIndex === quiz.length - 1
? "See Results"
: "Next Question";
}

function nextQuestion() {
const quiz = getCurrentQuiz();

if (!questionAnswered) return;

currentQuestionIndex++;

if (currentQuestionIndex < quiz.length) {
showQuestion();
} else {
finishQuiz();
}
}

function finishQuiz() {
const quiz = getCurrentQuiz();

elements.quizSection.hidden = true;
elements.quizResult.hidden = false;

elements.quizScore.textContent =
    currentScore + " / " + quiz.length;


if (!progress.completedQuizzes.includes(currentWorldKey)) {
progress.completedQuizzes.push(currentWorldKey);
progress.totalPoints += currentScore;
saveProgress();
}

elements.quizResult.scrollIntoView({
behavior: "smooth",
block: "center"
});
}

// 10. BACK BUTTON

function goBack() {
elements.worldDetails.hidden = true;
elements.lessonViewer.hidden = true;
elements.quizSection.hidden = true;
elements.quizResult.hidden = true;

currentWorldKey = null;
currentLessonId = null;

document.getElementById("worlds").scrollIntoView({
behavior: "smooth"
});
}

// 11. RESET PROGRESS

function resetProgress() {
const confirmed = window.
confirm(
"Are you sure you want to reset all your progress?"
);

if (!confirmed) return;

progress = createDefaultProgress();

saveProgress();

if (currentWorldKey) {
updateWorldProgress();
}
}

// 12. EVENT LISTENERS

elements.worldButtons.forEach(button => {
button.addEventListener("click", () => {
const worldId = button.dataset.world;

const worldImages = {
technology: "images/programming.jpg",
science: "images/space.jpg",
knowledge: "images/history.jpg",
creativity: "images/design.jpg"
};

if (elements.worldImage) {
elements.worldImage.src = worldImages[worldId];
}

openWorld(worldId);
});
});

elements.lessonsContainer.addEventListener("click", event => {
const button = event.target.closest("[data-lesson]");

if (button) {
openLesson(button.dataset.lesson);
}
});

elements.finishLessonButton.addEventListener(
"click",
finishLesson
);

elements.backButton.addEventListener("click", goBack);

elements.startQuizButton.addEventListener(
"click",
startQuiz
);

elements.quizOptions.addEventListener("click", event => {
const button = event.target.closest("[data-answer]");

if (button) {
chooseAnswer(Number(button.dataset.answer));
}
});

elements.nextQuestionButton.addEventListener(
"click",
nextQuestion
);

elements.retryQuizButton.addEventListener(
"click",
startQuiz
);

elements.resetProgressButton.addEventListener(
"click",
resetProgress
);

// 13. INITIALIZE

updateOverallProgress();