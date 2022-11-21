const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
}

let intervalId = null;

refs.start.addEventListener('click', changeBgInterval);
refs.stop.addEventListener('click', intervalClear);

document.getElementById("enableBtn").disabled = true;

function intervalClear() {
  clearInterval(intervalId)
  document.getElementById("disableBtn").disabled = false;
  document.getElementById("enableBtn").disabled = true;
}

function changeBgInterval() {
  intervalId = setInterval(getRandomHexColor, 1000);
  document.getElementById("disableBtn").disabled = true;
  document.getElementById("enableBtn").disabled = false;
}

function getRandomHexColor() {
  document.body.style.backgroundColor=`#${Math.floor(Math.random() * 16777215).toString(16)}`;
}





