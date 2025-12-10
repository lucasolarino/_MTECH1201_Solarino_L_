let cube;
let toggle = 0;
let explodeAngle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  rectMode(CENTER);
  cube = new hexahedron(0, 0, 0, 100);
}

function draw() {
  background(220);
  orbitControl();

  cube.drawHexahedron();

  if(toggle % 2 != 0) {
    cube.explodeHexahedron();
  } else if(toggle % 2 == 0) {
    cube.closeHexahedron();
  }
}

function mousePressed() {
  toggle++;
}

class hexahedron {
  constructor(x, y, z, r) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = r;

    this.explode = 0;
  }

  drawHexahedron() {
    for(let i = 0; i < 271; i+=90) {
      push();
      translate(this.x, this.y, this.z);
      rotateY(i);
      translate(0, 0, this.r+this.explode);
      square(0, 0, this.r*2);
      pop();
    }

    for(let i = 90; i < 271; i+=180) {
      push();
      translate(this.x, this.y, this.z);
      rotateX(i);
      translate(0, 0, this.r+this.explode)
      square(0, 0, this.r*2);
      pop();
    }
  }

  explodeHexahedron() {
    if(explodeAngle < 90) {
      this.explode = (this.r)*sin(explodeAngle);
      explodeAngle++;
    }
  }

  closeHexahedron() {
    if(explodeAngle > 0) {
      this.explode = (this.r)*(sin(explodeAngle-90)+1);
      explodeAngle--;
    }
  }
}