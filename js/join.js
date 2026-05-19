import { db }
from "../js/firebase.js";

import {
  
doc,
setDoc,
onSnapshot
  
}
from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const joinBtn =
  document.getElementById(
    "joinBtn"
  );

joinBtn.onclick = async () => {
  
  const name =
    document.getElementById(
      "name"
    ).value;
  
  const room =
    document.getElementById(
      "room"
    ).value;
  
  if (name === "" || room === "") {
    
    alert(
      "Isi semua data!"
    );
    
    return;
    
  }
  
  await setDoc(
    
    doc(
      db,
      "rooms",
      room,
      "players",
      name
    ),
    
    {
      score: 0
    }
    
  );
  
  localStorage.setItem(
    "playerName",
    name
  );
  
  localStorage.setItem(
    "roomCode",
    room
  );
  
  alert(
    "Berhasil masuk room!"
  );
  
  window.location.href =
    "kuis.html";
  
};
function waitGameStart(room) {
  
  const roomRef =
    doc(
      db,
      "rooms",
      room
    );
  
  onSnapshot(
    roomRef,
    (snapshot) => {
      
      const data =
        snapshot.data();
      
      if (data.started) {
        
        waitGameStart(room);
        
      }
      
    }
  );
  
}