import { db }
from "../js/firebase.js";

import {
  
  collection,
  onSnapshot
  
}
from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const lihatBtn =
  document.getElementById(
    "lihatBtn"
  );

const leaderboardList =
  document.getElementById(
    "leaderboardList"
  );

lihatBtn.onclick = () => {
  
  const roomCode =
    document.getElementById(
      "roomInput"
    ).value;
  
  if (roomCode === "") {
    
    alert(
      "Masukkan kode room!"
    );
    
    return;
    
  }
  
  const playersRef =
    collection(
      db,
      "rooms",
      roomCode,
      "players"
    );
  
  onSnapshot(
    playersRef,
    (snapshot) => {
      
      let players = [];
      
      snapshot.forEach((doc) => {
        
        players.push({
          
          name: doc.id,
          score: doc.data().score
          
        });
        
      });
      
      players.sort(
        (a, b) =>
        b.score - a.score
      );
      
      leaderboardList.innerHTML = "";
      
      players.forEach(
        (player, index) => {
          
          const li =
            document.createElement(
              "li"
            );
          
          li.innerHTML =
            
            `
          <span>
          ${index + 1}. ${player.name}
          </span>

          <span>
          ${player.score}
          </span>
          `;
          
          leaderboardList.appendChild(
            li
          );
          
        }
      );
      
    }
  );
  
};