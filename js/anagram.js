const words = [
  
  "MULUT",
  "LAMBUNG",
  "ANUS",
  "USUS",
  "KERONGKONGAN"
  
];

let currentWord = "";
let score = 0;
let timeLeft = 30;
let timer;

const scrambledEl =
  document.getElementById(
    "scrambled-word"
  );

const answerEl =
  document.getElementById(
    "answer"
  );

const scoreEl =
  document.getElementById(
    "score"
  );

const timerEl =
  document.getElementById(
    "timer"
  );

function startGame() {
  
  currentWord =
    words[
      Math.floor(
        Math.random() * words.length
      )
    ];
  
  scrambledEl.innerText =
    scrambleWord(currentWord);
  
  answerEl.value = "";
  
  resetTimer();
  
}

function scrambleWord(word) {
  
  return word
    .split("")
    .sort(() =>
      Math.random() - 0.5)
    .join("");
  
}

function checkAnswer() {
  
  const answer =
    answerEl.value.toUpperCase();
  
  if (answer === currentWord) {
    
    score += 10;
    
    scoreEl.innerText =
      "Score: " + score;
    
    alert("🎉 Jawaban Benar!");
    
  }
  
  else {
    
    alert("❌ Jawaban Salah!");
    
  }
  
  startGame();
  
}

function resetTimer() {
  
  clearInterval(timer);
  
  timeLeft = 15;
  
  timerEl.innerText =
    "⏰ " + timeLeft;
  
  timer = setInterval(() => {
    
    timeLeft--;
    
    timerEl.innerText =
      "⏰ " + timeLeft;
    
    if (timeLeft <= 0) {
      
      clearInterval(timer);
      
      alert(
        "⏰ Waktu Habis!"
      );
      
      startGame();
      
    }
    
  }, 1000);
  
}

startGame();