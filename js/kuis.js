const questionEl =
document.getElementById("question");

const answersEl =
document.getElementById("answers");

const quiz = [
{
question:"Organ pertama pencernaan?",
answers:["Mulut","Anus","Usus"],
correct:"Mulut"
},
{
question:"Yang menyerap sari makanan?",
answers:["Usus Halus","Mulut","Anus"],
correct:"Usus Halus"
}
];

let current = 0;

function showQuestion(){

const q = quiz[current];

questionEl.innerText = q.question;

answersEl.innerHTML = "";

q.answers.forEach(answer=>{

const btn = document.createElement("button");

btn.innerText = answer;

btn.onclick = ()=>{

if(answer === q.correct){
alert("Benar 😭🔥");
}

else{
alert("Salah 😭");
}

current++;

if(current < quiz.length){
showQuestion();
}

else{
questionEl.innerText =
"🎉 Kuis Selesai";

answersEl.innerHTML = "";
}

};

answersEl.appendChild(btn);

});

}

showQuestion();