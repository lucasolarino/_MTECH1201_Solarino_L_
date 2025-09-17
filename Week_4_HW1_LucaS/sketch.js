let spin = 0;
let sides = 90, peak = 90;
let r, s, ps;
let move = -1;
let move2 = -1;
let t = 1;



function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  ps = s;
  r = map(sides, 0, 180, 0, 150);
  s = map(peak, 0, 180, 0, 300);

  if(ps < s && s == 75){
    t = -t;
  } else if(ps > s && s == -75){
    t = -t;
  }

  if(t < 0){
    background(255);
    push();
    translate(width/2, height/2);
    noStroke();
    rotate(spin);
    fill(219);
    circle(0, s, 50);
    fill(37);
    circle(-130, r, 50);
    fill(182);
    circle(130, r, 50);
    pop();
    push();
    translate(width/2, height/2);
    noStroke();
    fill(0);
    circle(0, 0, 100);
    pop();
    push();
    translate(width/2, height/2);
    noStroke();
    rotate(spin);
    fill(109);
    circle(0, -s, 50);
    fill(73);
    circle(-130, -r, 50);
    fill(146);
    circle(130, -r, 50);
    pop();
  }
  if(t > 0){
    background(255);
    push();
    translate(width/2, height/2);
    noStroke();
    rotate(spin);
    fill(109);
    circle(0, -s, 50);
    fill(146);
    circle(130, -r, 50);
    fill(73);
    circle(-130, -r, 50);
    pop();
    push();
    translate(width/2, height/2);
    noStroke();
    fill(0);
    circle(0, 0, 100);
    pop();
    push();
    translate(width/2, height/2);
    noStroke();
    rotate(spin);
    fill(219);
    circle(0, s, 50);
    fill(182);
    circle(130, r, 50);
    fill(37);
    circle(-130, r, 50);
    pop();
  }

  if(r < -75){
    move = -move;
  }
  if(r > 75){
    move = -move;
  }
  if( s < -150){
    move2 = -move2
  }
  if( s > 150){
    move2 = -move2
  }
  console.log(s);
  peak = peak + move2;
  sides = sides + move;
  spin++;
}
