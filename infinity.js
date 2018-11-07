function infinity(radius, color, size, speed) {
  this.x = 0;
  this.y = 0;
  this.t = random(0, 100);
  this.radius = radius;
  this.color = color;
  this.size = size;
  this.speed = speed;
}

infinity.prototype.update = function () {
  this.x = this.radius * Math.sin(this.t);
  this.y = (this.radius / 3.0) * Math.sin(2*this.t);
  this.t += this.speed;
}

infinity.prototype.draw = function () {
  push();
  translate(width/2,height/2);
  stroke(this.color);
  strokeWeight(this.size);
  point(this.x, this.y);
  pop();
};