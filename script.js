// Enhanced Quiz Data (10 Personality-Based Questions)
// Add to the beginning of script.js
document.addEventListener('DOMContentLoaded', () => {
  // Create floating candles
  createFloatingCandles();
  
  // Add sparkle effect to buttons
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mouseover', createSparkles);
  });
});

function createFloatingCandles() {
  const candleContainer = document.createElement('div');
  candleContainer.className = 'candle-container';
  document.body.appendChild(candleContainer);
  
  for (let i = 0; i < 15; i++) {
    const candle = document.createElement('div');
    candle.className = 'floating-candle';
    candle.style.left = `${Math.random() * 100}%`;
    candle.style.top = `${Math.random() * 100}%`;
    candle.style.animationDelay = `${Math.random() * 5}s`;
    candleContainer.appendChild(candle);
  }
}

function createSparkles(e) {
  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${e.offsetX}px`;
    sparkle.style.top = `${e.offsetY}px`;
    sparkle.style.setProperty('--tx', `${(Math.random() - 0.5) * 50}px`);
    sparkle.style.setProperty('--ty', `${(Math.random() - 0.5) * 50}px`);
    sparkle.style.background = `hsl(${Math.random() * 60 + 30}, 100%, 50%)`;
    e.target.appendChild(sparkle);
    
    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  }
}

// Add to showResult() function:
function showResult() {
  // ... existing code ...
  
  // Add house-specific particle effects
  createHouseParticles(house);
}

function createHouseParticles(house) {
  const colors = {
    gryffindor: ['#ae0001', '#eeba30'],
    slytherin: ['#2a623d', '#aaaaaa'],
    ravenclaw: ['#222f5b', '#946b2d'],
    hufflepuff: ['#ffdb00', '#000000']
  };
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.background = colors[house][Math.floor(Math.random() * colors[house].length)];
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.width = `${Math.random() * 8 + 2}px`;
    particle.style.height = particle.style.width;
    particle.style.animation = `float-up ${Math.random() * 3 + 2}s ease-in forwards`;
    document.body.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 3000);
  }
}
const questions = [
  {
    text: "Which trait defines you best?",
    answers: [
      { text: "Bravery", gryffindor: 2 },
      { text: "Ambition", slytherin: 2 },
      { text: "Intelligence", ravenclaw: 2 },
      { text: "Loyalty", hufflepuff: 2 }
    ]
  },
  {
    text: "Your favorite class would be:",
    answers: [
      { text: "Defense Against the Dark Arts", gryffindor: 2, patronus: "lion" },
      { text: "Potions", slytherin: 2, patronus: "snake" },
      { text: "Astronomy", ravenclaw: 2, patronus: "eagle" },
      { text: "Herbology", hufflepuff: 2, patronus: "badger" }
    ]
  },
  {
    text: "How do you handle challenges?",
    answers: [
      { text: "Charge in headfirst", gryffindor: 2, patronus: "stag" },
      { text: "Find a clever shortcut", slytherin: 2, patronus: "fox" },
      { text: "Research thoroughly", ravenclaw: 2, patronus: "owl" },
      { text: "Ask for help", hufflepuff: 2, patronus: "dog" }
    ]
  },
  {
    text: "Pick a magical creature:",
    answers: [
      { text: "Griffin", gryffindor: 1, patronus: "griffin" },
      { text: "Basilisk", slytherin: 1, patronus: "serpent" },
      { text: "Phoenix", ravenclaw: 1, patronus: "phoenix" },
      { text: "House-Elf", hufflepuff: 1, patronus: "hare" }
    ]
  },
  {
    text: "Your friends would describe you as:",
    answers: [
      { text: "Fearless", gryffindor: 2 },
      { text: "Resourceful", slytherin: 2 },
      { text: "Wise", ravenclaw: 2 },
      { text: "Kind", hufflepuff: 2 }
    ]
  },
  {
    text: "Choose a Hogwarts ghost:",
    answers: [
      { text: "Nearly Headless Nick", gryffindor: 1 },
      { text: "The Bloody Baron", slytherin: 1 },
      { text: "The Grey Lady", ravenclaw: 1 },
      { text: "The Fat Friar", hufflepuff: 1 }
    ]
  },
  {
    text: "Which weapon would you choose?",
    answers: [
      { text: "Sword", gryffindor: 2, patronus: "wolf" },
      { text: "Dagger", slytherin: 2, patronus: "panther" },
      { text: "Bow and arrow", ravenclaw: 2, patronus: "swan" },
      { text: "Shield", hufflepuff: 2, patronus: "bear" }
    ]
  },
  {
    text: "Your ideal pet is:",
    answers: [
      { text: "Owl", ravenclaw: 1, patronus: "owl" },
      { text: "Cat", slytherin: 1, patronus: "cat" },
      { text: "Toad", hufflepuff: 1, patronus: "toad" },
      { text: "Rat", gryffindor: 1, patronus: "rat" }
    ]
  },
  {
    text: "Which magical object calls to you?",
    answers: [
      { text: "Sorting Hat", gryffindor: 1 },
      { text: "Invisibility Cloak", slytherin: 1 },
      { text: "Time-Turner", ravenclaw: 1 },
      { text: "Golden Snitch", hufflepuff: 1 }
    ]
  },
  {
    text: "Your greatest fear is:",
    answers: [
      { text: "Failure", gryffindor: 2 },
      { text: "Weakness", slytherin: 2 },
      { text: "Ignorance", ravenclaw: 2 },
      { text: "Betrayal", hufflepuff: 2 }
    ]
  }
];

// State Management
let currentQuestion = 0;
let scores = {
  gryffindor: 0,
  slytherin: 0,
  ravenclaw: 0,
  hufflepuff: 0,
  patronus: {}
};

// DOM Elements
const quizContainer = document.getElementById('quiz-container');
const resultDiv = document.getElementById('result');
const houseResult = document.getElementById('house-result');
const patronusResult = document.getElementById('patronus-result');
const houseCrest = document.getElementById('house-crest');
const restartBtn = document.getElementById('restart-btn');

// Initialize Quiz
function startQuiz() {
  showQuestion();
}

// Display current question
function showQuestion() {
  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  const question = questions[currentQuestion];
  let questionHTML = `<div class="question"><h3>${question.text}</h3><div class="answers">`;

  question.answers.forEach((answer, index) => {
    questionHTML += `<button onclick="handleAnswer(${index})">${answer.text}</button>`;
  });

  questionHTML += `</div></div>`;
  quizContainer.innerHTML = questionHTML;
}

// Process answer
function handleAnswer(answerIndex) {
  const answer = questions[currentQuestion].answers[answerIndex];
  
  // Update house scores
  if (answer.gryffindor) scores.gryffindor += answer.gryffindor;
  if (answer.slytherin) scores.slytherin += answer.slytherin;
  if (answer.ravenclaw) scores.ravenclaw += answer.ravenclaw;
  if (answer.hufflepuff) scores.hufflepuff += answer.hufflepuff;
  
  // Update Patronus counts (if specified for this answer)
  if (answer.patronus) {
    scores.patronus[answer.patronus] = (scores.patronus[answer.patronus] || 0) + 1;
  }
  
  currentQuestion++;
  showQuestion();
}

// Calculate and display result
function showResult() {
  quizContainer.classList.add('hidden');
  resultDiv.classList.remove('hidden');
  
  // Determine house (highest score)
  const houses = ["gryffindor", "slytherin", "ravenclaw", "hufflepuff"];
  const house = houses.reduce((a, b) => scores[a] > scores[b] ? a : b);
  
  // Determine Patronus (most frequent)
  const patronus = Object.keys(scores.patronus).reduce(
    (a, b) => scores.patronus[a] > scores.patronus[b] ? a : b,
    "stag" // Default fallback
  );
  
  // Display results
  houseResult.textContent = house.charAt(0).toUpperCase() + house.slice(1);
  patronusResult.textContent = patronus;
  
  // Apply house theme
  document.body.className = house;
  houseCrest.src = `assets/crests/${house}.png`;
  
  // Play house fanfare
  playSound(`${house}.mp3`);
}

// Restart quiz
restartBtn.addEventListener('click', () => {
  currentQuestion = 0;
  scores = {
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0,
    patronus: {}
  };
  
  document.body.className = '';
  resultDiv.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  showQuestion();
});

// Audio helper
function playSound(soundFile) {
  try {
    new Audio(`assets/sounds/${soundFile}`).play();
  } catch (e) {
    console.log("Sound error:", e);
  }
}

// Start the quiz
startQuiz();