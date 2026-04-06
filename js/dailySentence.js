const sentences = [
"Practice makes perfect.",
"I want to improve my English.",
"Learning English is fun.",
"Consistency is the key to success.",
"Today I learned something new."
];

let day = new Date().getDate();

let sentence = sentences[day % sentences.length];

document.getElementById("dailySentence").innerText = sentence;
