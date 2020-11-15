let p;

function setup() {
  createCanvas(500, 500);
  p = new Particle();
}

function draw() {
  background(0);
  p.run();
}

class Particle  {
constructor() {
this.acc = createVector(0, 0.05);
this.vel = createVector(random(-2, 2), random(-4));
this.pos = createVector(width/2, height/2);
this.lifespan = 255.0;
this.saturation = 255.0;
}

run() {
  this.update();
  this.display();
}

update()  {
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.lifespan -=2;
  this.saturation -=1;
}

display() {
  noStroke();
  fill(this.saturation, 0, 0, this.lifespan);
  ellipse(this.pos.x, this.pos.y, 10, 10);
}
}
