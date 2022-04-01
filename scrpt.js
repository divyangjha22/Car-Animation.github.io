var audio = document.createElement("audio");
console.log("sw",audio)
document.body.appendChild(audio);
audio.setAttribute('src', 'sound1.mp3');
audio.autoplay = true;
audio.muted = true;
document.body.addEventListener("click", function () {
    audio.muted = false;
    audio.play()
})
