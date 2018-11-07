/**
 * Generates a palette based on Inigo Quilez's wonderful article
 * http://www.iquilezles.org/www/articles/palettes/palettes.htm
 * 
 * @param {p5.Vector} a 
 * @param {p5.Vector} b 
 * @param {p5.Vector} c 
 * @param {p5.Vector} d 
 * @returns {Object}
 */

function Palette(a,b,c,d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

/**
 * Returns a p5.color object in RGB space
 * @returns {color}
 */
Palette.prototype.getColor = function(t) {
  const l = p5.Vector.add(this.a, this.b).add(0.0);
  const r = p5.Vector.mult(this.c, t).add(this.d).mult(TWO_PI);
  const cr = createVector(cos(r.x), cos(r.y), cos(r.z));
  const result = p5.Vector.mult(cr, l);
  return color(map(result.x, -1, 1, 0, 255), map(result.y, -1, 1, 0, 255), map(result.z, -1, 1, 0, 255));
}