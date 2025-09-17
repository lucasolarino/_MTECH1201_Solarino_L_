let col1;
let col2;
let col3;
let col4;
let col5;
let col6;
let col7;
let col8;
let bg;
let size = 5;
let indicate;

function setup() {
  createCanvas(1280, 662);
  rectMode(CENTER);
  // col1 = black
  // col2 = red
  // col3 = green
  // col4 = blue
  // col5 = yellow
  // col6 = purple
  // col7 = cyan
  // col8 = white
  col1 = color(0);
  col2 = color(255, 0, 0);
  col3 = color(0, 255, 0);
  col4 = color(0, 0, 255);
  col5 = color(255, 255, 0);
  col6 = color(255, 0, 255);
  col7 = color(0, 255, 255);
  col8 = color(255);
  indicate = col1;
  bg = col8;
}

function draw() {
  // Size of the brush can never go above 50px or below 5px
  if(size <= 0){
    size = 5;
  }
  if(size > 50){
    size = 50;
  }

  push();
  noStroke();
  // Sets up a square in the top left corner that shows what color the brush is
  fill(indicate);
  rect(50, 50, 50);
  // Sets up a circle in the top left corner that shows what size the brush is
  circle(50, 125, size);
  pop();
  stroke(indicate);
}

function mouseDragged(){
  // Clicking an holding the mouse will start drawing
  strokeWeight(size);
  stroke(indicate);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function keyPressed(){
  // Pressing backspace will reset the canvas
  if (keyCode === 8){
    background(255);
    noStroke();
    indicate = col1;
    fill(col1);
    rect(50, 50, 50);
    size = 5;
    stroke(col1);
    bg = col8;
  }

  // Press 1 on the keyboard changes the brush color to black
  // Press 2 on the keyboard changes the brush color to red
  // Press 3 on the keyboard changes the brush color to green
  // Press 4 on the keyboard changes the brush color to blue
  // Press 5 on the keyboard changes the brush color to yellow
  // Press 6 on the keyboard changes the brush color to purple
  // Press 7 on the keyboard changes the brush color to cyan
  // Press 8 on the keyboard changes the brush color to white
  if(keyCode === 49){
    indicate = col1;
  } else if(keyCode === 50){
    indicate = col2;
  } else if(keyCode === 51){
    indicate = col3;
  } else if(keyCode ===52){
    indicate = col4;
  } else if(keyCode ===53){
    indicate = col5;
  } else if(keyCode === 54){
    indicate = col6;
  } else if(keyCode === 55){
    indicate = col7;
  } else if(keyCode === 56){
    indicate = col8;
  }
  
  // Pressing B on the keyboard will set the canvas to the curent color
if(keyCode === 66){
  background(indicate);
  bg = indicate;
}

  // Pressing 0 on the keyboard will increase the brush size by 5px
  if(keyCode === 48){
    size = size + 5;
    push();
    noStroke();
    fill(bg);
    circle(50, 125, 75);
    pop();
  // Pressing 9 on the keyboard will decrease the brush size by 5px
  } else if(keyCode === 57){
    size = size - 5;
    push();
    noStroke();
    fill(bg);
    circle(50, 125, 75);
    pop();
  }
}