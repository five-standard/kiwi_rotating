const timer = document.querySelector("#timer");
const audio = document.querySelector("audio");
const video = document.querySelector("video");
const button = document.querySelector("#sound");
const startButton = document.querySelector("#startButton");

const speedMinus = document.querySelector("#speedMinus");
const speedCount = document.querySelector("#speedCount");
const speedPlus = document.querySelector("#speedPlus");

let time = 0;
audio.muted = false;

let speed = 1.0;
video.playbackRate = speed;
audio.volume = 0.3;

speedCount.innerHTML = video.playbackRate;

speedMinus.addEventListener("click", () => {
  if (speed > 0.1) speed -= 0.05;
  video.playbackRate = speed;
  speedCount.innerHTML = speed.toFixed(2);
});

speedPlus.addEventListener("click", () => {
  if (speed < 10.0) speed += 0.05;
  video.playbackRate = speed;
  speedCount.innerHTML = speed.toFixed(2);
});

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  audio.play();
});

button.addEventListener("click", () => {
  button.innerHTML = `소리 ${audio.muted ? "켬" : "끔"}`;
  audio.muted = !audio.muted;
});

const interval = setInterval(() => {
  time++;
  timer.innerHTML = `${(time / 3600).toFixed(0)}시간 ${(time / 60).toFixed(
    0
  )}분 ${time % 60}초`;
}, 1000);
