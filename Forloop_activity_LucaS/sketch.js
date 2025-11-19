function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  orbitControl();
  dodecahedron(0, 0, 0, 50);
}

function dodecahedron(x, y, z, r) {
  let fa = acos(-Math.sqrt(5)/5);
  let gr = (1+Math.sqrt(5))/2;
  let a = r * (2 * sin(180 / 5));
  let ar = a / (2 * tan(180 / 5));
  let off = 108/10;
  let h = ((a * Math.sqrt(3) * gr)/2);

  for(let i = 0; i < 241; i+=120){
    push();
    translate(x, -h+y , z);
    rotateY(i);
    rotateX(off);
    translate(0, 2*ar, -(r+ar)*sin(180 - fa));
    pentagon(r);
    pop();
    push();
    translate(x, -h+y, z);
    rotateY(i);
    rotateX(fa+off);
    translate(0, -r);
    pentagon(r);
    pop();
  }

  for(let i = 0; i < 241; i+=120){
    push();
    translate(x, h+y, z);
    rotateY(i);
    rotateX(180+off);
    translate(0, 2*ar, -(r+ar)*sin(180 - fa));
    pentagon(r);
    pop();
    push();
    translate(x, h+y, z);
    rotateY(i);
    rotateX(180+fa+off);
    translate(0, -r);
    pentagon(r);
    pop();
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