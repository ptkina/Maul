import { db }
from "./firebase.js";

import {
  doc,
  setDoc,
  collection,
  onSnapshot
}
from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const createBtn =
  document.getElementById("createRoom");

const roomCodeEl =
  document.getElementById("roomCode");

const playerList =
  document.getElementById("playerList");

let currentRoom = "";

createBtn.onclick = async () => {
  
  const roomCode =
    Math.floor(1000 + Math.random() * 9000)
    .toString();
  
  currentRoom = roomCode;
  
  roomCodeEl.innerText = roomCode;
  
  await setDoc(
    
    doc(db, "rooms", roomCode),
    
    {
      created: true
    }
    
  );
  
  listenPlayers();
  
};

function listenPlayers() {
  
  const playersRef =
    collection(
      db,
      "rooms",
      currentRoom,
      "players"
    );
  
  onSnapshot(playersRef, (snapshot) => {
    
    playerList.innerHTML = "";
    
    snapshot.forEach((player) => {
      
      const li = document.createElement("li");
      
      li.innerText = player.id;
      
      playerList.appendChild(li);
      
    });
    
  });
  
}