function infinity(radius, color, size, speed) {
  this.x = 0;
  this.y = 0;
  this.t = Math.random() * 100.0;
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

infinity.prototype.draw = function (sketch) {
  sketch.push();
  sketch.translate(sketch.width/2,sketch.height/2);
  sketch.stroke(this.color);
  sketch.fill(this.color);
  sketch.ellipse(this.x, this.y, this.size, this.size);
  sketch.pop();
};