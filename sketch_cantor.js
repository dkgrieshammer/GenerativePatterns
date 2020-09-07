/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
  cantor(50, 50, 200);
}

function draw() {
  // Put drawings here
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

function cantor(x, y, len) {
  if (len > 1) {
    line(x, y, x + len, y);
    y += 20;
    cantor(x, y, len / 3);
    cantor(x + len * (2 / 3), y, len / 3);
  }
}
