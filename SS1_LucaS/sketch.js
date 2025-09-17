//MTEC 1201
//Short Study #1 - Luca Solarino
//A Mangekyou Sharingan (from Naruto)
//I want be able to come up with my own cool drawing ideas and animate using p5.js.
//I'm not the best artist but using these tools will make it easier to translate ideas from my brain into reality.
let spin = 0;

function setup() {
  createCanvas(854, 480);
  background(244, 159, 104);
  translate(427, 240);
  rectMode(CENTER);
  angleMode(DEGREES);
  strokeWeight(5);
  fill(240);
  arc(70, 100, 1000, 700, 180, 270);
  arc(70, 100, 1600, 700, 270, 0);
  arc(160, -30, 600, 800, 0, 90);
  arc(160, 100, 1600, 360, 90, 180);
  strokeWeight(3);
  stroke(240, 100, 100);
  line(-427, 160, -340, 172);
  line(-340, 172, -200, 150);
  line(-427, 90, -370, 20);
  line(-370, 20, -270, -30);
  line(-180, 240, -140, 220);
  line(427, -160, 320, -170);
  line(320, -170, 200, -164);
  line(427, 0, 300, -30);
  line(427, 140, 340, 180);
  line(340, 180, 220, 200);
  noStroke();
  fill(0);
  circle(0, 0, 420);
}

function draw() {
  push();
  translate(427, 240);
  fill(110, 0, 0);
  circle(0, 0, 400);
  fill(180, 0, 0);
  ellipse(0, 14, 360, 320);
  fill(160, 0, 0);
  circle(0, 0, 180);
  fill(0);
  circle(0, 0, 100);
  fill(160, 0, 0);
  circle(0, 0, 40);
  pop();

  push();
  translate(427, 240);
  rotate(spin);
  fill(0);
  rotate(30);
  triangle(180, 24, 14, 24, -48, 133);
  rotate(120);
  triangle(180, 24, 14, 24, -48, 133);
  rotate(120);
  triangle(180, 24, 14, 24, -48, 133);
  pop();
  spin++;
}
