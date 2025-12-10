let dodeca;
let toggle = 0;
let explodeAngle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  dodeca = new dodecahedron(0, 0, 0, 100);
}

function draw() {
  background(220);
  orbitControl();

  dodeca.drawDodecahedron();

  if(toggle % 2 != 0) {
    dodeca.explodeDodecahedron();
  } else if(toggle % 2 == 0) {
    dodeca.closeDodecahedron();
  }
}

function mousePressed() {
  toggle++;
}

function pentagon(r) {
  beginShape();
    for(let n = 0; n < 5; n++){
      let sx = sin(n * (360/5)) * r;
      let sy = cos(n * (360/5)) * r;
      vertex(sx, sy);
    }
  endShape(CLOSE);
}

class dodecahedron {
  constructor(x, y, z, r) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = r;

    this.fa = acos(-Math.sqrt(5)/5);
    this.gr = (1+Math.sqrt(5))/2;
    this.a = this.r * (2 * sin(180 / 5));
    this.ar = this.a / (2 * tan(180 / 5));
    this.off = 108/10;
    this.h = ((this.a * Math.sqrt(3) * this.gr)/2);
    this.explode = 0;
  }

  drawDodecahedron() {
    for(let i = 0; i < 241; i+=120){
      push();
      translate(this.x, -this.h+this.y , this.z);
      rotateY(i);
      rotateX(this.off);
      translate(0, 2*this.ar, -(this.r+this.ar)*sin(180 - this.fa)-this.explode);
      pentagon(this.r);
      pop();
      push();
      translate(this.x, -this.h+this.y, this.z);
      rotateY(i);
      rotateX(this.fa+this.off);
      translate(0, -this.r, this.explode);
      pentagon(this.r);
      pop();
    }  

    for(let i = 0; i < 241; i+=120){
      push();
      translate(this.x, this.h+this.y, this.z);
      rotateY(i);
      rotateX(180+this.off);
      translate(0, 2*this.ar, -(this.r+this.ar)*sin(180 - this.fa)-this.explode);
      pentagon(this.r);
      pop();
      push();
      translate(this.x, this.h+this.y, this.z);
      rotateY(i);
      rotateX(180+this.fa+this.off);
      translate(0, -this.r, this.explode);
      pentagon(this.r);
      pop();
    }
  }

  explodeDodecahedron() {
    if(explodeAngle < 90) {
      this.explode = (this.r)*sin(explodeAngle);
      explodeAngle++;
    }
  }

  closeDodecahedron() {
    if(explodeAngle > 0) {
      this.explode = (this.r)*(sin(explodeAngle-90)+1);
      explodeAngle--;
    }
  }
}