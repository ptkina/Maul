const cardsData = [
  
  {
    text: "Mulut",
    pair: "Tempat makanan masuk"
  },
  
  {
    text: "Tempat makanan masuk",
    pair: "Mulut"
  },
  
  {
    text: "Lambung",
    pair: "Menghancurkan makanan"
  },
  
  {
    text: "Menghancurkan makanan",
    pair: "Lambung"
  },
  
  {
    text: "Usus Halus",
    pair: "Menyerap sari makanan"
  },
  
  {
    text: "Menyerap sari makanan",
    pair: "Usus Halus"
  }
  
];

let firstCard = null;
let secondCard = null;

let lockBoard = false;

let score = 0;
let matched = 0;

const board =
  document.getElementById("gameBoard");

const scoreEl =
  document.getElementById("score");

const pairEl =
  document.getElementById("pair");

shuffle(cardsData);

cardsData.forEach(data => {
  
  const card =
    document.createElement("div");
  
  card.classList.add("card");
  
  card.dataset.text = data.text;
  card.dataset.pair = data.pair;
  
  card.innerText = "?";
  
  card.addEventListener("click",
    flipCard);
  
  board.appendChild(card);
  
});

function flipCard() {
  
  if (lockBoard) return;
  
  if (this === firstCard) return;
  
  this.classList.add("flipped");
  
  this.innerText =
    this.dataset.text;
  
  if (!firstCard) {
    
    firstCard = this;
    return;
    
  }
  
  secondCard = this;
  
  checkMatch();
  
}

function checkMatch() {
  
  const isMatch =
    firstCard.dataset.pair ===
    secondCard.dataset.text;
  
  if (isMatch) {
    
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    
    score += 10;
    matched++;
    
    scoreEl.innerText =
      "Score: " + score;
    
    pairEl.innerText =
      "Pasangan: " + matched;
    
    resetBoard();
    
    if (matched === 3) {
      
      setTimeout(() => {
        
        alert(
          "🎉 Selamat! Semua pasangan ditemukan!"
        );
        
      }, 500);
      
    }
    
  }
  
  else {
    
    lockBoard = true;
    
    setTimeout(() => {
      
      firstCard.classList.remove(
        "flipped"
      );
      
      secondCard.classList.remove(
        "flipped"
      );
      
      firstCard.innerText = "?";
      secondCard.innerText = "?";
      
      resetBoard();
      
    }, 1000);
    
  }
  
}

function resetBoard() {
  
  firstCard = null;
  secondCard = null;
  
  lockBoard = false;
  
}

function shuffle(array) {
  
  array.sort(() =>
    Math.random() - 0.5);
  
}