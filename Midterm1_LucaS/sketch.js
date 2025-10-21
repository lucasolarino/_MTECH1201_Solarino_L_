let cnr1X = -100;
let cnr1Y = 0;
let cnr2X = 100;
let cnr2Y = 0;
let cnr3X = -100;
let cnr3Y = 0;
let cnr4X = 100;
let cnr4Y = 0;

let cnr1V = 0;
let cnr2V = 0;
let cnr3V = 0;
let cnr4V = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  push();
  background(255);
  translate(windowWidth/2, windowHeight/2);
  // triangle(cnr1X, cnr1Y, cnr2X, cnr2Y, cnr3X, cnr3Y);
  // triangle(cnr4X, cnr4Y, cnr2X, cnr2Y, cnr3X, cnr3Y);
  triangle(-100, 100, 100, 100, -100, -100);
  triangle(100, -100, 100, 100, -100, -100);
  pop();
}

function mouseDragged(){
  // if(pmouseY < mouseY && cnr1V <= windowHeight){
  //   cnr1V+=20;
  //   cnr1Y = map(cnr1V, 0, windowHeight, 0, 100);
  //   cnr2V+=20;
  //   cnr2Y = map(cnr2V, 0, windowHeight, 0, 100);
  //   cnr3V-=20;
  //   cnr3Y = map(cnr3V, 0, windowHeight, 0, 100);
  //   cnr4V-=20;
  //   cnr4Y = map(cnr4V, 0, windowHeight, 0, 100);
  // }

  // if(pmouseY > mouseY && cnr1V >= -windowHeight){
  //   cnr1V-=20;
  //   cnr1Y = map(cnr1V, 0, windowHeight, 0, 100);
  //   cnr2V-=20;
  //   cnr2Y = map(cnr2V, 0, windowHeight, 0, 100);
  //   cnr3V+=20;
  //   cnr3Y = map(cnr3V, 0, windowHeight, 0, 100);
  //   cnr4V+=20;
  //   cnr4Y = map(cnr4V, 0, windowHeight, 0, 100);
  // }

  if(pmouseX < mouseX){
    

  }
}