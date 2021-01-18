let testGame = [
  ["", "2", "3", "4", "5", "7", "6", "9", "8"],
  ["4", "5", "7", "6", "9", "8", "2", "1", ""],
  ["6", "", "8", "2", "1", "3", "", "", "7"],
  ["", "", "5", "8", "", "1", "9", "7", "4"],
  ["", "", "", "9", "7", "4", "5", "", "2"],
  ["", "7", "", "", "3", "2", "", "", "1"],
  ["5", "1", "", "", "", "", "7", "8", ""],
  ["", "4", "6", "7", "", "9", "", "2", ""],
  ["7", "", "9", "", "", "5", "3", "4", "6"],
];

let squares = [];
let num = "";
for (let i = 0; i < 9; i++) {
  let innerArray = [];
  for (let j = 0; j < 9; j++) {
    num = testGame[j][i];
    innerArray.push(new Square(i * 40, j * 40, 40, num));
  }
  squares.push(innerArray);
}

let inputSound;
let checkSound;
let alertSound;
function preload() {
  inputSound = loadSound("./assets/sounds/Input/Input-04a.mp3");
  checkSound = loadSound("./assets/sounds/Input/Input-03.mp3");
  alertSound = loadSound("./assets/sounds/Alert/Alert-10.mp3");
  montserrat = loadFont(
    "./assets/fonts/Montserrat_Alternates/MontserratAlternates-Medium.ttf"
  );
}

let timer;
let counter = 300;
let seconds, minutes;

function setup() {
  let cnv = createCanvas(800, 360);
  cnv.position(width / 2, height / 2, "fixed");

  button = createButton("check");
  button.position(900, 300);
  button.mouseClicked(collectNum);
  button.style("font-size", "20px");
  button.style("background-color", "white");
  button.style("border-color", "darkgray");

  timer = createP("timer");
  timer.style("font-size", "20px");
  setInterval(timeIt, 1000);
}

let s = 'check your solution by clicking "check" ';

function draw() {
  background(255);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      squares[i][j].render();
    }
  }
  textFont(montserrat);
  textSize(16);
  text(s, 560, 200);
}

function timeIt() {
  if (counter > 0) {
    counter--;
  }
  minutes = floor(counter / 60);
  seconds = counter % 60;
  time = timer.html(minutes + ": " + seconds);
  time.position(915, 230);
  if (minutes === 0 && seconds === 0) {
    s = "Start it over by refreshing the page!";
  }
}

function mouseClicked() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      squares[i][j].clicked();
    }
  }
}

function collectNum() {
  checkSound.play();
  let collected = [];
  for (let i = 0; i < 9; i++) {
    let innerCollected = [];
    for (let j = 0; j < 9; j++) {
      innerCollected.push(squares[j][i].textString);
    }
    collected.push(innerCollected);
  }
  let result = checkDouble(collected);
  if (checkDouble(collected) === true) {
    s = "You solved the Panda Sudoku!";
  } else {
    s = `Hint: ${result}`;
  }
}

function check1D(array) {
  const numberContainer = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < numberContainer.length; i++) {
    if (!array.includes(numberContainer[i])) {
      return numberContainer[i];
    }
  }
  return true;
}

function checkDouble(collected) {
  for (let i = 0; i < collected.length; i++) {
    let res = check1D(collected[i]);
    if (res !== true) {
      return `row ${i + 1} does not include ${res}`;
    }
  }
  for (let i = 0; i < collected.length; i++) {
    let col = [];
    for (let j = 0; j < collected.length; j++) {
      col.push(collected[j][i]);
    }
    let res = check1D(collected[i]);
    if (res !== true) {
      return `column ${i + 1} does not include ${res}`;
    }
  }
  for (let i = 0; i < 3; i++) {
    let subA1 = [];
    for (let j = 0; j < 3; j++) {
      subA1.push(collected[3 * i][j]);
      subA1.push(collected[3 * i + 1][j]);
      subA1.push(collected[3 * i + 2][j]);
    }
    let res = check1D(collected[i]);
    if (res !== true) {
      return `Square ${i + 1}, 1 does not include ${res}`;
    }

    let subA2 = [];
    for (let j = 0; j < collected.length; j++) {
      subA2.push(collected[3 * i][j + 3]);
      subA2.push(collected[3 * i + 1][j + 3]);
      subA2.push(collected[3 * i + 2][j + 3]);
    }
    res = check1D(collected[i]);
    if (res !== true) {
      return `Square ${i + 1}, 2 does not include ${res}`;
    }

    let subA3 = [];
    for (let j = 0; j < collected.length; j++) {
      subA3.push(collected[3 * i][j + 6]);
      subA3.push(collected[3 * i + 1][j + 6]);
      subA3.push(collected[3 * i + 2][j + 6]);
    }
    res = check1D(collected[i]);
    if (res !== true) {
      return `Square ${i + 1}, 3 does not include ${res}`;
    }
  }
  return true;
}
