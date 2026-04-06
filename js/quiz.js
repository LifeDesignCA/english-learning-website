function checkAnswer(answer){

let result = document.getElementById("quizResult");

if(answer === 2){
result.innerText = "✅ Correct!";
}else{
result.innerText = "❌ Try again.";
}

}
