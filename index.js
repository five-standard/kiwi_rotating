const timer = document.querySelector("#timer");
const audio = document.querySelector("audio");
const video = document.querySelector("video");
const button = document.querySelector("#sound");

let time = 0;
audio.muted = false;

// video.playbackRate = 0.75;
audio.volume = 0.3;

button.addEventListener("click", () => {
  button.innerHTML = `소리 ${audio.muted ? "켬" : "끔"}`;
  audio.muted = !audio.muted;
});

const interval = setInterval(() => {
  time++;
  timer.innerHTML = `${(time / 3600).toFixed(0)}시간 ${(time / 60).toFixed(
    0
  )}분 ${time % 60}초째 보고 있다`;
}, 1000);
