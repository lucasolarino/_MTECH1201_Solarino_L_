function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}
let phase = 0;

let r = 0;
let spread = 0;
let straight1 = 0;
let diagonal1 = 0;
let straight2 = 0;
let diagonal2 = 0;
let size1 = 25;
let size2 = 35;

let startL = -100;
let startR = 100;
let startC = 100;
let startCU = 0;
let startRU = 0;
let startLU = 0;
let startLM;
let startCML;
let startRM;
let startCMR;
let startCDR;
let startCDL;
let startRD;
let startLD;

let strike;

function draw() {
  background(0);
  if(phase >= 1){
    if(spread < 180){
      straight1 = 250 * cos(spread) + 500;
      diagonal1 = 177 * cos(spread) + 354;
      straight2 = 400 * cos(spread) + 800;
      diagonal2 = 283 * cos(spread) + 566;
    }
    push();
    rotateZ(90);
    rotateX(-r);
    rotateY(-r);
    fill(220, 180, 255);
    //noStroke();
    ring(straight1, diagonal1, size1);
    pop();
    push();
    rotateZ(r);
    fill(1800, 140, 255);
    //ring(straight2, diagonal2, size2);
    pop();
    spread+=2;
  }
  push();
  if(phase >= 2){
    translate(random(-3, 3), random(-3, 3));
  }
  crystal();
  pop();
  if(phase >= 2){
    strike = ceil(random(1000));
    if(strike % 50 == 0){
      push();
      rotate(random(0, 360));
      electric();
      pop();
    }
  }
  r++;
  console.log(phase);
}

function mousePressed(){
  phase++;
}

function keyPressed(){
  if(keyCode === 82){
    phase = 0;

    r = 0;
    spread = 0;
    straight1 = 0;
    diagonal1 = 0;
    straight2 = 0;
    diagonal2 = 0;
  }
}

function ring(s, d, r){
  push();
  translate(0, s);
  sphere(r, 8, 8);
  pop();
  push();
  translate(-d, -d);
  sphere(r, 8, 8);
  pop();
  push();
  translate(-s, 0);
  sphere(r, 8, 8);
  pop();
  push();
  translate(-d, d);
  sphere(r, 8, 8);
  pop();
  push();
  translate(0, -s);
  sphere(r, 8, 8);
  pop();
  push();
  translate(d, d);
  sphere(r, 8, 8);
  pop();
  push();
  translate(s, 0);
  sphere(r, 8, 8);
  pop();
  push();
  translate(d, -d);
  sphere(r, 8, 8);
  pop();
}

function crystal() {
  if(startR >= 0) {
    startLM = map(startL, -100, 0, -100, -71);
    startRM = map(startR, 0, 100, 71, 100);
    startCMR = map(startC, 0, 100, -71, 0);
    startCML = map(startC, 0, 100, -71, 0);
    startCDR = -10;
    startCDL = -10;
    startRD = map(startRU, 0, 100, 0, -10);
    startLD = 0;
    startL+=2;
    startR-=2;
    startC-=2;
    startCU+=2;
    startRU+=2;
    startLU+=2;
  }

  if(startR < 0 && startR >= -100) {
    startLM = map(startL, 0, 100, 71, 100);
    startRM = map(startR, 0, -100, 71, 0);
    startCMR = map(startC, 0, -100, -71, -100);
    startCML = map(startC, 0, -100, 71, 0);
    startCDR = map(startCU, 0, 100, 0, -10);
    startCDL = -10;
    startRD = -10;
    startLD = 0;
    startL+=2;
    startR-=2;
    startC-=2;
    startCU-=2;
    startRU-=2;
    startLU-=2;
  }

  if(startR < -100 && startR >= -200) {
    startLM = map(startL, 100, 200, 100, 71);
    startRM = map(startR, -100, -200, 0, -71);
    startCMR = map(startC, -100, -200, -100, -71);
    startCML = map(startC, -100, -200, 0, -71);
    startCDR = 0;
    startCDL = -10;
    startRD = -10;
    startLD = map(startLU, 0, 100, 0, -10);
    startL+=2;
    startR-=2;
    startC-=2;
    startCU+=2;
    startRU+=2;
    startLU+=2;
  }

  if(startR < -200 && startR >= -300) {
    startLM = map(startL, 200, 300, 71, 0);
    startRM = map(startR, -200, -300, 71, 100);
    startCMR = map(startC, -200, -300, 71, 0);
    startCML = map(startC, -200, -300, -71, -100);
    startCDL = map(startCU, 0, 100, 0, -10);
    startCDR = -10;
    startRD = 0;
    startLD = -10;
    startL+=2;
    startR-=2;
    startC-=2;
    startCU-=2;
    startRU-=2;
    startLU-=2;
  }

  if(startR < -300) {
    startL = -100;
    startR = 100;
    startC = 100
    startRU = 0;
    startCU = 0;
    startLU = 0;
  }

  push();
  //translate(windowWidth/2, windowHeight/2);
  //background(255);
  fill(255, 160, 255, 180);
  triangle(startCML, startCDL, startLM, startLD, 0, -195);
  triangle(startCMR, startCDR, startRM, startRD, 0, -195);
  fill(255, 120, 255, 180);
  triangle(startCML, startCDL, startLM, startLD, 0, 200);
  triangle(startCMR, startCDR, startRM, startRD, 0, 200);
  pop();
}

function electric() {
  stroke(0, 220, 255);
  strokeWeight(3);
  line(20, -60, 80, -140);

  line(-40, -160, -80, -110);
  line(-90, -40, -80, -110);

  line(-20, 60, -50, 160);
  line(-20, 130, -50, 160);
  line(-20, 130, -30, 240);

  line(-40, 10, 120, -30);
  line(110, 30, 120, -30);
}