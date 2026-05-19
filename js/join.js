import { db }
from "./firebase.js";

import {
  doc,
  setDoc
}
from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const joinBtn =
document.getElementById("joinBtn");

joinBtn.onclick = async () => {

const name =
document.getElementById("name").value;

const room =
document.getElementById("room").value;

if(name === "" || room === ""){

alert("Isi semua data!");
return;

}

try{

await setDoc(

doc(
  db,
  "rooms",
  room,
  "players",
  name
),

{
score:0
}

);

alert("Berhasil masuk room 😭🔥");

window.location.href =
"kuis.html";

}

catch(error){

console.log(error);

alert("Firebase error!");

}

};