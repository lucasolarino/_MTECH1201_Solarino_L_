function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  orbitControl();
  tetrahedron(0, 0, 0, 50);
}

function tetrahedron(x, y, z, r) {
  let fa = 180 - acos(-1/3);
  let ar = r * sin(30);
  let off = r * cos(fa);

  for(let i = 0; i < 241; i+=120) {
    push();
    translate(x, y, z);
    rotateY(i);
    translate(0, 0, off);
    rotateX(90 - fa);
    eqTriangle(r);
    pop();
  }
  push();
  translate(x, y, z);
  rotateX(90);
  translate(0, 0, -ar * sin(fa));
  eqTriangle(r);
  pop();
}

function eqTriangle(r) {
  triangle(0, -r, -r * cos(30), r * sin(30), r * cos(30), r * sin(30));
}