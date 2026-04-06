let recorder;
let audioChunks = [];

async function startRecording(){

let stream = await navigator.mediaDevices.getUserMedia({audio:true});

recorder = new MediaRecorder(stream);

recorder.start();

recorder.ondataavailable = e => {
audioChunks.push(e.data);
};

}

function stopRecording(){

recorder.stop();

recorder.onstop = () => {

let blob = new Blob(audioChunks);

let url = URL.createObjectURL(blob);

document.getElementById("audioPlayback").src = url;

audioChunks=[];

};

}
