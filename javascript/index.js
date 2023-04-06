const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  const formattedMinutes = chronometer.twoDigitsNumber(minutes);
  minDecElement.textContent = formattedMinutes[0];
  minUniElement.textContent = formattedMinutes[1];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  const formattedSeconds = chronometer.twoDigitsNumber(seconds);
  secDecElement.textContent = formattedSeconds[0];
  secUniElement.textContent = formattedSeconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splitTime = chronometer.split();
  const newSplitElement = document.createElement('li');
  newSplitElement.textContent = splitTime;
  splitsElement.appendChild(newSplitElement);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.classList.replace('btn', 'stop');
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.replace('btn', 'split');
}

function setSplitBtn() {
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.replace('split', 'reset');
}

function setStartBtn() {
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.replace('stop', 'btn');
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.replace('split', 'reset');
}

function setResetBtn() {
  clearSplits();
  chronometer.reset();
  printTime();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
  } else {
    chronometer.stop();
    setStartBtn();
  }
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    setSplitBtn();
    setStartBtn();
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
});
