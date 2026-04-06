function speakSentence(){

let text = document.getElementById("dailySentence").innerText;

let speech = new SpeechSynthesisUtterance();

speech.text = text;

speech.lang = "en-US";

speech.rate = 0.9;

window.speechSynthesis.speak(speech);

}
