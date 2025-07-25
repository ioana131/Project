const questions = [
  {
    question: "How are you feeling today?",
    options: { a: "Happy", b: "Sad" },
    correctAnswer: "a",
    correctResponse: "Yay! Stay positive!",
    incorrectResponse: "It's okay, better days are coming ❤️"
  },
  {
    question: "Do you enjoy programming?",
    options: { a: "Yes", b: "Not really" },
    correctAnswer: "a",
    correctResponse: "That's the spirit!",
    incorrectResponse: "Give it time! It can grow on you 😊"
  },
  {
    question: "Would you prefer tea or coffee?",
    options: { a: "Tea", b: "Coffee" },
    correctAnswer: "b",
    correctResponse: "Great choice! ☕",
    incorrectResponse: "Tea is cozy too! 🍵"
  }
];

let currentQuestionIndex = 0;
const chatContainer = document.getElementById("chat-container");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const optionsContainer = document.getElementById("options-container");

displayQuestion();

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const answer = userInput.value.trim();
  if (answer) {
    displayUserMessage(answer);
    evaluateAnswer(answer.toLowerCase());
    userInput.value = "";
  }
});

function displayQuestion() {
  const q = questions[currentQuestionIndex];
  appendBotMessage(q.question);
  optionsContainer.innerHTML = "";

  for (const [key, text] of Object.entries(q.options)) {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = `${key.toUpperCase()}: ${text}`;
    btn.dataset.answer = key;
    btn.onclick = () => handleUserResponse(key);
    optionsContainer.appendChild(btn);
  }
}

function handleUserResponse(answerKey) {
  const selected = questions[currentQuestionIndex].options[answerKey];
  displayUserMessage(`${answerKey.toUpperCase()}: ${selected}`);
  evaluateAnswer(answerKey);
}

function displayUserMessage(text) {
  const msg = document.createElement("div");
  msg.classList.add("message", "user");
  msg.innerHTML = `<strong>You:</strong> ${text}`;
  chatContainer.appendChild(msg);
  scrollToBottom();
}

function appendBotMessage(text) {
  const msg = document.createElement("div");
  msg.classList.add("message", "bot");
  msg.innerHTML = `<strong>Bot:</strong> ${text}`;
  chatContainer.appendChild(msg);
  scrollToBottom();
}

function evaluateAnswer(answer) {
  const q = questions[currentQuestionIndex];
  const validAnswers = Object.keys(q.options);

  if (!validAnswers.includes(answer)) {
    const optionsList = validAnswers
      .map(key => `${key.toUpperCase()}: ${q.options[key]}`)
      .join(", ");
    appendBotMessage(`Please choose one of the provided options: ${optionsList}`);
    return;
  }

  if (answer === q.correctAnswer) {
    appendBotMessage(q.correctResponse);
  } else {
    appendBotMessage(q.incorrectResponse);
  }

  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  setTimeout(displayQuestion, 1200);
}

function scrollToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
