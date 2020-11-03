let testGame = [
    ['', "2", "3", "4", "5", "7", "6", "9", "8"],
    ["4", "5", "7", "6", "9", "8", "2", "1", ''],
    ["6", '', "8", "2", "1", "3", '', '', "7"],
    ['', '', "5", "8", '', "1", "9", "7", "4"],
    ['', '', '', "9", "7", "4", "5", '', "2"],
    ['', "7", '', '', "3", "2", '', '', "1"],
    ["5", "1", '', '', '', '', "7", "8", ''],
    ['', "4", "6", "7", '', "9", '', "2", ''],
    ["7", '', "9", '', '', "5", "3", "4", "6"]
];

let squares = [];
let num = '';
for(let i = 0; i < 9; i++) {
  let innerArray = [];
  for (let j = 0; j < 9; j++) {
    num = testGame[j][i];
    innerArray.push(new Square(i*40, j*40, 40, num));
  }
  squares.push(innerArray);
}


function setup() {
   let cnv = createCanvas(360, 360);
   cnv.position (120, 100, 'fixed');
   
   button = createButton('check');
   button.position(550, 300);
   button.mousePressed(collectNum);
  }
  
function draw() {
    background(220);
    for(let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        squares[i][j].render();
      }
    }
}

function mouseClicked() {
  for(let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      squares[i][j].clicked();
    }
  }
}

function collectNum() {
    let collected = [];
    for(let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            collected.push(squares[j][i].textString);
        }
    }
    console.log(collected)
    // console.log(squares[0][1])
    // console.log('xiaomaozi')
    // const collected = [];
}
