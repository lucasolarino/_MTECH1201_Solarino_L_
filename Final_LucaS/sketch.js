let tetraMenu;
let cubeMenu;
let dodecaMenu;
let tetraView;
let cubeView;
let dodecaView;

let toggleTetra = 0;
let explodeAngleTetra = 0;
let toggleCube = 0;
let explodeAngleCube = 0;
let toggleDodeca = 0;
let explodeAngleDodeca = 0;

let spinTetra = 0;
let spinCube = 0;
let spinDodeca = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  rectMode(CENTER);

  tetraMenu = new tetrahedron(0, 0, 0, 75);
  cubeMenu = new hexahedron(0, 0, 0, 50);
  dodecaMenu = new dodecahedron(0, 0, 0, 50);
}

function draw() {
  background(220);
  //orbitControl();
  
  push();
  translate(-300,20);
  rotateY(spinTetra);
  rotateX(-15);
  tetraMenu.drawTetrahedron();
  pop();

  push();
  translate(0, 0);
  rotateY(spinCube);
  rotateX(-15);
  cubeMenu.drawHexahedron();
  pop();

  push();
  translate(300,0);
  rotateY(spinDodeca);
  rotateX(90-(108/10)-15);
  dodecaMenu.drawDodecahedron();
  pop();

  if((mouseX > (width/2 + 220) && mouseX < (width - 250)) && (mouseY > (height/2 - 70) && mouseY < (height/2 + 75))) {
    spinDodeca++;
  } else {
    spinDodeca = 0;
  }

  if((mouseX > 260 && mouseX < (width/2 - 250)) && (mouseY > (height/2 - 50) && mouseY < (height/2 + 60))) {
    spinTetra++;
  } else {
    spinTetra = 0;
  }

  if((mouseX > (width/2-60) && mouseX < (width/2 + 60)) && (mouseY > (height/2 - 60) && mouseY < (height/2 + 60))) {
    spinCube++;
  } else {
    spinCube = 0;
  }
}

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
    if(explodeAngleTetra < 90) {
      this.explode = (this.r)*sin(explodeAngleTetra);
      explodeAngleTetra++;
    }
  }

  closeTetrahedron() {
    if(explodeAngleTetra > 0) {
      this.explode = (this.r)*(sin(explodeAngleTetra-90)+1);
      explodeAngleTetra--;
    }
  }
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
    if(explodeAngleCube < 90) {
      this.explode = (this.r)*sin(explodeAngleCube);
      explodeAngleCube++;
    }
  }

  closeHexahedron() {
    if(explodeAngleCube > 0) {
      this.explode = (this.r)*(sin(explodeAngleCube-90)+1);
      explodeAngleCube--;
    }
  }
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
    if(explodeAngleDodeca < 90) {
      this.explode = (this.r)*sin(explodeAngleDodeca);
      explodeAngleDodeca++;
    }
  }

  closeDodecahedron() {
    if(explodeAngleDodeca > 0) {
      this.explode = (this.r)*(sin(explodeAngleDodeca-90)+1);
      explodeAngleDodeca--;
    }
  }
}