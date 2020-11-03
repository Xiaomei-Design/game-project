let squares = [];

for(let i = 0; i < 9; i++) {
  let innerArray = [];
  for (let j = 0; j < 9; j++) {
    innerArray.push(new Square(i*40, j*40, 40));
  }
  squares.push(innerArray);
}

function setup() {
    createCanvas(400, 400);
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

