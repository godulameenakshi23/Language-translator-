async function translateText(){
const text=document.getElementById("inputText").value;
const source=document.getElementById("sourceLang").value;
const target=document.getElementById("targetLang").value;

const url=`https://api.mymemory.translated.net/get?q=${text}&langpair=${source}|${target}`;

const response=await fetch(url);
const data=await response.json();

document.getElementById("outputText").value=
data.responseData.translatedText;
}

function copyText(){
navigator.clipboard.writeText(
document.getElementById("outputText").value
);
alert("Copied");
}

function speakText(){
let speech=new SpeechSynthesisUtterance(
document.getElementById("outputText").value
);
window.speechSynthesis.speak(speech);
}
