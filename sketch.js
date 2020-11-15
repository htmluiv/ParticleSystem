let p;

function setup() {
  createCanvas(500, 500);
  p = new Particle();
}

function draw() {
  background(100);
  p.run();
}

class Particle  {
constructor() {
this.acc = createVector(0, 0.05);
this.vel = createVector(random(-10, 10), random(-10, 10));
this.pos = createVector(0,0);
}

run() {
  this.update();
  this.display();
}

update()  {
  this.vel.add(this.acc);
  this.pos.add(this.vel);
}

display() {
  fill(255);
  ellipse(100,100, 100, 100);
}
}
