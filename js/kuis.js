import { db }
from "../js/firebase.js";

import {
  
  doc,
  updateDoc
  
}
from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
const questions = [
  
  {
    question: "Organ pertama tempat makanan masuk adalah...",
    answers: [
      "Lambung",
      "Mulut",
      "Usus",
      "Kerongkongan"
    ],
    correct: "Mulut"
  },
  
  {
    question: "Fungsi lambung adalah...",
    answers: [
      "Mengunyah makanan",
      "Menyerap air",
      "Menghancurkan makanan",
      "Membuang sisa makanan"
    ],
    correct: "Menghancurkan makanan"
  },
  
  {
    question: "Organ yang menyerap sari makanan adalah...",
    answers: [
      "Usus halus",
      "Anus",
      "Mulut",
      "Kerongkongan"
    ],
    correct: "Usus halus"
  },
  
  {
    question: "Tempat keluarnya sisa makanan adalah...",
    answers: [
      "Mulut",
      "Usus",
      "Anus",
      "Lambung"
    ],
    correct: "Anus"
  }
  
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const nomorEl = document.getElementById("nomor");
const timerEl = document.getElementById("timer");

function showQuestion() {
  
  clearInterval(timer);
  
  timeLeft = 15;
  timerEl.innerText = timeLeft;
  
  startTimer();
  
  const q = questions[currentQuestion];
  
  nomorEl.innerText =
    "Soal " + (currentQuestion + 1);
  
  questionEl.innerText = q.question;
  
  answersEl.innerHTML = "";
  
  q.answers.forEach(answer => {
    
    const button =
      document.createElement("button");
    
    button.innerText = answer;
    
    button.onclick = () =>
      checkAnswer(answer, button);
    
    answersEl.appendChild(button);
    
  });
  
}

function startTimer() {
  
  timer = setInterval(() => {
    
    timeLeft--;
    
    timerEl.innerText = timeLeft;
    
    if (timeLeft <= 0) {
      
      clearInterval(timer);
      
      nextQuestion();
      
    }
    
  }, 1000);
  
}

function checkAnswer(answer, button) {
  
  clearInterval(timer);
  
  const correctAnswer =
    questions[currentQuestion].correct;
  
  const buttons =
    answersEl.querySelectorAll("button");
  
  buttons.forEach(btn => {
    
    if (btn.innerText === correctAnswer) {
      
      btn.classList.add("correct");
      
    }
    
  });
  
  if (answer === correctAnswer) {
    
    score += 10;
    
    updateScore();
    
    scoreEl.innerText =
      "Score: " + score;
    
  }
  
  else {
    
    button.classList.add("wrong");
    
  }
  
  setTimeout(() => {
    
    nextQuestion();
    
  }, 1500);
  
}

function nextQuestion() {
  
  currentQuestion++;
  
  if (currentQuestion < questions.length) {
    
    showQuestion();
    
  }
  
  else {
    
    showResult();
    
  }
  
}

function showResult() {
  
  questionEl.innerHTML =
    "🎉 Kuis Selesai!";
  
  answersEl.innerHTML =
    "<h2>Score Akhir: " + score + "</h2>";
  
}

showQuestion();
async function updateScore() {
  
  const playerName =
    localStorage.getItem(
      "playerName"
    );
  
  const roomCode =
    localStorage.getItem(
      "roomCode"
    );
  
  if (!playerName || !roomCode)
    return;
  
  await updateDoc(
    
    doc(
      db,
      "rooms",
      roomCode,
      "players",
      playerName
    ),
    
    {
      score: score
    }
    
  );
  
}