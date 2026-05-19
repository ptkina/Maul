import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

import {
  getFirestore
}
from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyDKvq5ddpk66UJNmX7fO-kXrklTzPMMx-U",

  authDomain:
  "wordwall-pencernaan-1f0ce.firebaseapp.com",

  projectId:
  "wordwall-pencernaan-1f0ce",

  storageBucket:
  "wordwall-pencernaan-1f0ce.firebasestorage.app",

  messagingSenderId:
  "520706091815",

  appId:
  "1:520706091815:web:d0ff01af7e840bd9991702"

};

const app =
initializeApp(firebaseConfig);

const db =
getFirestore(app);

export { db };