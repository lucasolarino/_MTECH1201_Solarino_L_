let col, col1, col2;
let i;
let left, right;
let size;

function setup() {
  createCanvas(1280, 662);
  // Makes the main background white
  background(255);

  col1 = color(0);
  col2 = color(255);
  size = 20;

  // Creates a black rectangle that splits the screen in half
  push();
  translate(640, 0);
  noStroke();
  fill(0);
  rect(0, 0, width / 2, height);
  pop();
}

function draw() {
  // Allows map to work both ways from the center of the screen
  if(mouseX > 640){
    left = 640;
    right = width;
  } else {
      left = 0;
      right = width / 2;
  }

  // Brush size can never be 0
  if(size <= 0){
    size = 5;
  }

  // Creates the gradient effect
  i = map(mouseX, left, right, 0, 1);
  col = lerpColor(col2, col1, i);
}

function mouseDragged(){

  // Clicking and holding the mouse will draw
  strokeWeight(size);
  stroke(col);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function keyPressed(){
  // Pressing backspace on the keyboard will cause the canvas to reset
  if(keyCode === 8){
  background(255);
  push();
  translate(640, 0);
  noStroke();
  fill(0);
  rect(0, 0, width / 2, height);
  pop();
  }

  //Using 0 and 9 on the keyboard allows you to make the brush bigger or smaller respectively
  if(keyCode === 48){
    size = size + 5;
  } else if(keyCode === 57){
    size = size - 5;
  }
}