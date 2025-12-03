let tetra;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  orbitControl();
  tetra = new tetrahedron(0, 0, 0, 50);
  tetra.drawTetrahedron();
}

function mousePressed() {
  
}
// function tetrahedron(x, y, z, r) {
//   let fa = 180 - acos(-1/3);
//   let ar = r * sin(30);
//   let off = r * cos(fa);

//   for(let i = 0; i < 241; i+=120) {
//     push();
//     translate(x, y, z);
//     rotateY(i);
//     translate(0, 0, off);
//     rotateX(90 - fa);
//     eqTriangle(r);
//     pop();
//   }
//   push();
//   translate(x, y, z);
//   rotateX(90);
//   translate(0, 0, -ar * sin(fa));
//   eqTriangle(r);
//   pop();
// }

function eqTriangle(r) {
  triangle(0, -r, -r * cos(30), r * sin(30), r * cos(30), r * sin(30));
}

class tetrahedron {
  constructor(x, y, z, r) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = r;

    this.fa = 180 - acos(-1/3);
    this.ar = this.r * sin(30);
    this.off = this.r * cos(this.fa);
    this.explode = 0;
  }

  drawTetrahedron() {
    for(let i = 0; i < 241; i+=120) {
      push();
      translate(this.x, this.y, this.z);
      rotateY(i);
      translate(0, 0, this.off);
      rotateX(90 - this.fa);
      translate(0, 0, this.explode)
      eqTriangle(this.r);
      pop();
    }
    push();
    translate(this.x, this.y, this.z);
    rotateX(90);
    translate(0, 0, -this.ar * sin(this.fa) - this.explode);
    eqTriangle(this.r);
    pop();
  }

  explodeTetrahedron() {
    this.explode = 20;
  }
}