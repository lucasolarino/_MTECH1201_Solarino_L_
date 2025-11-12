function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}



function draw() {
  background(220);
  orbitControl();
  let angle = acos(-Math.sqrt(5)/5);
  let gr = (1+Math.sqrt(5))/2;
  let a = 50 * (2 * sin(180 / 5));
  let ar = a / (2 * tan(180 / 5));
  let angle2 = 180 - (2*(angle-90)) - angle;
  let h = ((a * Math.sqrt(3) * gr)/2);

  for(let i = 0; i < 241; i+=120){
    push();
    translate(0, -h);
    rotateY(i);
    rotateX(angle2);
    translate(0, 2*ar, -(50+ar)*sin(180 - angle));
    pentagon(0, 0, 50);
    pop();
    push();
    translate(0, -h);
    rotateY(i);
    rotateX(angle+angle2);
    translate(0, -50);
    pentagon(0, 0, 50);
    pop();
  }

  for(let i = 0; i < 241; i+=120){
    push();
    translate(0, h);
    rotateY(i);
    rotateX(180+angle2);
    translate(0, 2*ar, -(50+ar)*sin(180 - angle));
    pentagon(0, 0, 50);
    pop();
    push();
    translate(0, h);
    rotateY(i);
    rotateX(180+angle+angle2);
    translate(0, -50);
    pentagon(0, 0, 50);
    pop();
  }
}

function pentagon(x, y, r){
  let angle = 360/5;
  beginShape();
    for(let n = 0; n < 5; n++){
      let sx = x + sin(n * angle) * r;
      let sy = y + cos(n * angle) * r;
      vertex(sx, sy);
    }
  endShape(CLOSE);
}