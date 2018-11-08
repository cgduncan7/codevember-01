/**
 * sketch
 */
var s = function(sketch) {
  // #region settings
  const framerate = 120;
  const w = window.innerWidth;
  const h = window.innerHeight;
  // #endregion

  var infinities;
  var palette;
  var bg;

  // #region p5
  sketch.setup = function() {
    const p5canvas = sketch.createCanvas(w, h);
    canvas = p5canvas.canvas;
    sketch.frameRate(framerate);

    const a = sketch.createVector(0.5,0.5,0.5);
    const b = sketch.createVector(0.5,0.5,0.5);
    const c = sketch.createVector(1.0,1.0,1.0);
    const d = sketch.createVector(0.0, 0.33, 0.67);
    palette = new Palette(sketch,a,b,c,d);

    const minRadius = w / 6.0;
    const maxRadius = w / 3.0;
    const minSize = 10;
    const maxSize = 25;
    const minSpeed = 0.01;
    const maxSpeed = 0.025;
    const numInfinities = 100;
    infinities = [];
    
    for (let i = 0; i < numInfinities; i++) {
      const radius = sketch.random(minRadius, maxRadius);
      const size = sketch.random(minSize, maxSize);
      const speed = sketch.random(minSpeed, maxSpeed);
      const color = palette.getColor(sketch.random());
      infinities.push(new infinity(radius, color, size, speed));
    }

    bg = sketch.lerpColor(palette.getColor(sketch.random()), sketch.color('black'), 0.85);

    sketch.background(bg);
    bg.setAlpha(50);
  }

  sketch.draw = function() {
    sketch.background(bg);

    for (let infinity of infinities) {
      infinity.update(sketch);
    }

    for (let infinity of infinities) {
      infinity.draw(sketch);
    }
  }
  // #endregion
};

var sketch = new p5(s, document.getElementById('sketch'));