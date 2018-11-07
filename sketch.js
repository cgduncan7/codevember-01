/**
 * test3d
 */

// #region settings
const framerate = 60;
const w = window.innerWidth;
const h = window.innerHeight;
// #endregion

var infinities;
var palette;
var bg;

// #region p5
p5.disableFriendlyErrors = true;
function setup() {
  const p5canvas = createCanvas(w, h, P2D);
  canvas = p5canvas.canvas;
  frameRate(framerate);

  const a = createVector(0.5,0.5,0.5);
  const b = createVector(0.5,0.5,0.5);
  const c = createVector(1.0,1.0,1.0);
  const d = createVector(0.0, 0.33, 0.67);
  palette = new Palette(a,b,c,d)

  const minRadius = width / 6.0;
  const maxRadius = width / 3.0;
  const minSize = 10;
  const maxSize = 25;
  const minSpeed = 0.01;
  const maxSpeed = 0.025;
  const numInfinities = 100;
  infinities = [];
  
  for (let i = 0; i < numInfinities; i++) {
    const radius = random(minRadius, maxRadius);
    const size = random(minSize, maxSize);
    const speed = random(minSpeed, maxSpeed);
    const color = palette.getColor(random());
    color.setAlpha(100);
    infinities.push(new infinity(radius, color, size, speed));
  }

  bg = lerpColor(palette.getColor(random()), color('black'), 0.85);

  background(bg);
  bg.setAlpha(50);
}

function draw() {
  background(bg);

  for (let infinity of infinities) {
    infinity.update();
    infinity.draw();
  }
}
// #endregion