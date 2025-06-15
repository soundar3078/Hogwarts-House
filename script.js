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
    text: "How do you handle challenges?",
    answers: [
      { text: "Face them head-on", gryffindor: 2, patronus: "lion" },
      { text: "Find clever shortcuts", slytherin: 2, patronus: "fox" },
      { text: "Research solutions", ravenclaw: 2, patronus: "owl" },
      { text: "Ask for help", hufflepuff: 2, patronus: "dog" }
    ]
  },
  {
    text: "Your ideal weekend involves:",
    answers: [
      { text: "Adventure sports", gryffindor: 2 },
      { text: "Strategic games", slytherin: 2 },
      { text: "Reading/learning", ravenclaw: 2 },
      { text: "Helping others", hufflepuff: 2 }
    ]
  },
  {
    text: "What's your leadership style?",
    answers: [
      { text: "Bold and decisive", gryffindor: 2 },
      { text: "Calculated and goal-oriented", slytherin: 2 },
      { text: "Analytical and fair", ravenclaw: 2 },
      { text: "Supportive and inclusive", hufflepuff: 2 }
    ]
  },
  {
    text: "Choose a superpower:",
    answers: [
      { text: "Super strength", gryffindor: 2, patronus: "bear" },
      { text: "Invisibility", slytherin: 2, patronus: "chameleon" },
      { text: "Teleportation", ravenclaw: 2, patronus: "hummingbird" },
      { text: "Healing", hufflepuff: 2, patronus: "dolphin" }
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
    text: "When working in a team, you:",
    answers: [
      { text: "Take charge", gryffindor: 2 },
      { text: "Find the most efficient path", slytherin: 2 },
      { text: "Ensure logical solutions", ravenclaw: 2 },
      { text: "Keep everyone united", hufflepuff: 2 }
    ]
  },
  {
    text: "Your approach to rules is:",
    answers: [
      { text: "Break them if justified", gryffindor: 2 },
      { text: "Bend them to your advantage", slytherin: 2 },
      { text: "Understand their purpose", ravenclaw: 2 },
      { text: "Follow them diligently", hufflepuff: 2 }
    ]
  },
  {
    text: "Your greatest strength is:",
    answers: [
      { text: "Courage", gryffindor: 2 },
      { text: "Determination", slytherin: 2 },
      { text: "Creativity", ravenclaw: 2 },
      { text: "Empathy", hufflepuff: 2 }
    ]
  },
  {
    text: "What motivates you most?",
    answers: [
      { text: "Overcoming obstacles", gryffindor: 2 },
      { text: "Achieving success", slytherin: 2 },
      { text: "Gaining knowledge", ravenclaw: 2 },
      { text: "Building relationships", hufflepuff: 2 }
    ]
  },
  {
    text: "Your dream vacation is:",
    answers: [
      { text: "Mountain climbing", gryffindor: 2, patronus: "mountain goat" },
      { text: "Luxury resort", slytherin: 2, patronus: "peacock" },
      { text: "Cultural exploration", ravenclaw: 2, patronus: "butterfly" },
      { text: "Volunteer trip", hufflepuff: 2, patronus: "elephant" }
    ]
  },
  {
    text: "In a crisis, you:",
    answers: [
      { text: "Act immediately", gryffindor: 2 },
      { text: "Assess the best outcome for yourself", slytherin: 2 },
      { text: "Analyze the situation", ravenclaw: 2 },
      { text: "Ensure everyone's safe", hufflepuff: 2 }
    ]
  },
  {
    text: "Your favorite subject would be:",
    answers: [
      { text: "Physical Education", gryffindor: 2 },
      { text: "Economics", slytherin: 2 },
      { text: "Science", ravenclaw: 2 },
      { text: "Psychology", hufflepuff: 2 }
    ]
  },
  {
    text: "How do you make decisions?",
    answers: [
      { text: "Go with your gut", gryffindor: 2 },
      { text: "Weigh pros and cons", slytherin: 2 },
      { text: "Research thoroughly", ravenclaw: 2 },
      { text: "Consult friends/family", hufflepuff: 2 }
    ]
  },
  {
    text: "Your ideal pet is:",
    answers: [
      { text: "Large dog", gryffindor: 1, patronus: "wolf" },
      { text: "Exotic reptile", slytherin: 1, patronus: "snake" },
      { text: "Parrot", ravenclaw: 1, patronus: "raven" },
      { text: "Golden retriever", hufflepuff: 1, patronus: "rabbit" }
    ]
  },
  {
    text: "Your communication style is:",
    answers: [
      { text: "Direct and bold", gryffindor: 2 },
      { text: "Persuasive", slytherin: 2 },
      { text: "Precise", ravenclaw: 2 },
      { text: "Warm and friendly", hufflepuff: 2 }
    ]
  },
  {
    text: "Your greatest fear is:",
    answers: [
      { text: "Being powerless", gryffindor: 2 },
      { text: "Being ordinary", slytherin: 2 },
      { text: "Being ignorant", ravenclaw: 2 },
      { text: "Being alone", hufflepuff: 2 }
    ]
  },
  {
    text: "Your role in a friend group is:",
    answers: [
      { text: "The protector", gryffindor: 2 },
      { text: "The strategist", slytherin: 2 },
      { text: "The advisor", ravenclaw: 2 },
      { text: "The peacemaker", hufflepuff: 2 }
    ]
  },
  {
    text: "What's your learning style?",
    answers: [
      { text: "Hands-on experience", gryffindor: 2 },
      { text: "Competitive environments", slytherin: 2 },
      { text: "Independent study", ravenclaw: 2 },
      { text: "Group collaboration", hufflepuff: 2 }
    ]
  },
  {
    text: "Your life motto would be:",
    answers: [
      { text: "Fortune favors the bold", gryffindor: 2 },
      { text: "The ends justify the means", slytherin: 2 },
      { text: "Knowledge is power", ravenclaw: 2 },
      { text: "Kindness changes everything", hufflepuff: 2 }
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
  
  // Create question HTML with progress indicator
  let questionHTML = `
    <div class="question">
      <div class="progress">Question ${currentQuestion + 1} of ${questions.length}</div>
      <h3>${question.text}</h3>
      <div class="answers">
  `;

  // Add answer buttons with improved accessibility
  question.answers.forEach((answer, index) => {
    questionHTML += `
      <button 
        onclick="handleAnswer(${index})"
        aria-label="${answer.text}"
        data-house="${Object.keys(answer).find(key => 
          ['gryffindor','slytherin','ravenclaw','hufflepuff'].includes(key)) || 'neutral'}"
      >
        ${answer.text}
      </button>
    `;
  });

  questionHTML += `</div></div>`;
  
  // Smooth transition between questions
  quizContainer.style.opacity = 0;
  setTimeout(() => {
    quizContainer.innerHTML = questionHTML;
    quizContainer.style.opacity = 1;
    
    // Add visual feedback for answer options
    document.querySelectorAll('.answers button').forEach(btn => {
      btn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 0 15px rgba(210, 180, 140, 0.7)';
      });
      btn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
      });
    });
  }, 300);
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
  houseCrest.src = `assets/images/crests/${house}.png`;
  
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

// Background music control - AUTOPLAY VERSION
document.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');
  
  // Set initial volume (30%)
  bgMusic.volume = 0.3;

  // Try autoplay immediately
  const tryAutoplay = () => {
    bgMusic.play()
      .then(() => {
        musicToggle.classList.remove('muted');
        musicToggle.textContent = '🔊';
      })
      .catch(e => {
        // If blocked, wait for user interaction
        console.log("Autoplay blocked:", e);
        musicToggle.textContent = "▶ Click to enable sound";
        document.body.addEventListener('click', unlockAudio, { once: true });
      });
  };

  // Unlock audio on interaction
  const unlockAudio = () => {
    bgMusic.play()
      .then(() => {
        musicToggle.classList.remove('muted');
        musicToggle.textContent = '🔊';
      })
      .catch(e => console.log("Still blocked:", e));
  };

  // Toggle button functionality
  musicToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (bgMusic.paused) {
      bgMusic.play();
      musicToggle.classList.remove('muted');
      musicToggle.textContent = '🔊';
    } else {
      bgMusic.pause();
      musicToggle.classList.add('muted');
      musicToggle.textContent = '🔇';
    }
  });

  // Initial attempt
  tryAutoplay();
});

// Start the quiz
startQuiz();