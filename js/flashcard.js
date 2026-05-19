const cards = [

  {
    front: "👄 MULUT",
    back:
    "Tempat pertama makanan masuk dan dikunyah."
  },

  {
    front: "🥣 LAMBUNG",
    back:
    "Menghancurkan makanan dengan asam lambung."
  },

  {
    front: "🌀 USUS HALUS",
    back:
    "Menyerap sari-sari makanan."
  },

  {
    front: "🧩 USUS BESAR",
    back:
    "Menyerap air dari sisa makanan."
  },

  {
    front: "🚽 ANUS",
    back:
    "Tempat keluarnya sisa makanan."
  }

];

let currentIndex = 0;

const flashcard =
  document.getElementById(
    "flashcard"
  );

const frontEl =
  document.getElementById(
    "front"
  );

const backEl =
  document.getElementById(
    "back"
  );

function showCard(){

  frontEl.innerText =
    cards[currentIndex].front;

  backEl.innerText =
    cards[currentIndex].back;

}

flashcard.addEventListener(
  "click",
  () => {

    flashcard.classList.toggle(
      "flip"
    );

  }
);

function nextCard(){

  flashcard.classList.remove(
    "flip"
  );

  currentIndex++;

  if(currentIndex >= cards.length){

    currentIndex = 0;

  }

  showCard();

}

showCard();