const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyColor: document.querySelector('body'),
};
let timerId = null;

refs.startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    changeBackgroundColor()
    }, 1000);
    disableStartButton();
})

function changeBackgroundColor() {
    refs.bodyColor.style.backgroundColor = getRandomHexColor();
  }

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

refs.stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  makeStartButtonActive();  
})

function disableStartButton() {
    refs.startBtn.setAttribute('disabled', '');
}

function makeStartButtonActive() {
    refs.startBtn.removeAttribute('disabled');
}